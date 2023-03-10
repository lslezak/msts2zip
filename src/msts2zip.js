
import { ungzip } from "pako";
import JSZip from "jszip";

let index = 0;
const decoder = new TextDecoder("utf-16le");

function read_int(data) {
  // 32-bit unsigned integer, LE byte order
  const arr = new Uint32Array(data.buffer.slice(index, index + 4));
  index += 4;
  return arr[0];
}

function read_header(data) {
  const len = read_int(data);
  const name = new Uint8Array(data.buffer, index, (len - 1) * 2);
  index += 2 * len;
  return decoder.decode(name);
}

function read_file(data) {
  const file_len = read_int(data);
  const name_len = read_int(data);

  const name = new Uint8Array(data.buffer.slice(index, index + ((name_len - 1) * 2)));
  // change file path separator
  const file_name = decoder.decode(name).replaceAll("\\", "/");
  if (process.env.NODE_ENV !== "production") console.log("file_name: ", file_name);
  index += 2 * name_len;

  const content = new Uint8Array(data.buffer, index, file_len);
  index += file_len;

  return [file_name, content];
}

export function msts2zip(input, name) {
  const data = ungzip(new Uint8Array(input));
  index = 0;

  // read the header - the route name
  const route = read_header(data);
  if (process.env.NODE_ENV !== "production") console.log("Route: ", route);

  // then there are 2 more headers, usually with the same content
  read_header(data);
  read_header(data);

  // then there are 8 bytes, the meaning is unclear...
  index += 8;

  const content = {};

  while (index < data.byteLength) {
    const [file, val] = read_file(data);
    content[file] = val;
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("Found files: ", Object.keys(content).length);
  }

  let dataSize = 0;
  const zip = new JSZip();
  Object.keys(content).forEach((name) => {
    zip.file(name, content[name], { binary: true });
    dataSize += content[name].length;
  });

  const zipFile = zip.generateAsync({
    type: "uint8array",
    compression: "DEFLATE",
    compressionOptions: {
      level: 9
    }
  });

  const fileName = name.replace(/\.apk$/i, "") + "_converted.zip";

  return {
    fileName,
    route,
    files: Object.keys(content).length,
    zipFile,
    dataSize
  };
}
