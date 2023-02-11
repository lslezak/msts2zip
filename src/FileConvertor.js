
import React, { useState } from "react";
import { FileUpload, FormGroup } from "@patternfly/react-core";

import { msts2zip } from "./msts2zip";
import ZipFile from "./ZipFile";

export default function FileConvertor() {
  const [value, setValue] = useState("");
  const [filename, setFilename] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [convertedData, setConvertedData] = useState(null);

  const handleChange = (value, filename, _event) => {
    if (process.env.NODE_ENV !== "production") {
      console.log(filename, value);
    }

    setConvertedData(null);
    setValue(value);
    setFilename(filename);

    if (filename && filename !== "" && value && value !== "") {
      setIsLoading(true);
      // HTML5 FileReader
      const reader = new FileReader();
      reader.onload = (ev) => {
        const content = ev.target.result;
        const result = msts2zip(content, filename);
        setConvertedData(result);
        setIsLoading(false);
      };

      reader.readAsArrayBuffer(value);
    }
  };

  return (
    <>
      <FormGroup role="group" label="Activity file">
        <FileUpload
          isDisabled={loading}
          value={value}
          filename={filename}
          filenamePlaceholder="Drag and drop an activity file or select one"
          hideDefaultPreview="true"
          onChange={handleChange}
          browseButtonText="Select File"
          dropzoneProps={{
            accept: ".apk"
          }}
        />

        { convertedData &&
          <>
            <br />
            <ZipFile data={convertedData} />
          </> }
      </FormGroup>
    </>
  );
}
