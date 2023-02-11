
import React, { useEffect, useState } from "react";
import { Button, Text } from "@patternfly/react-core";
import prettyBytes from "pretty-bytes";

export default function ZipFile({ data }) {
  const [zipLength, setZipLength] = useState(null);
  const [href, setHref] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);

      data.zipFile.then((zipData) => {
        if (process.env.NODE_ENV !== "production") {
          console.log("ZIP size", zipData.length);
        }
        const blob = new Blob([zipData], { type: "application/zip" });
        const urlHref = URL.createObjectURL(blob);
        setZipLength(zipData.length);
        setHref(urlHref);
      });
    }

    return () => {
      if (href) {
        if (process.env.NODE_ENV !== "production") console.log("Blob URL cleanup");

        URL.revokeObjectURL(href);
      }
    };
  }, [isLoading, data.zipFile, href]);

  return (
    <>
      <Text>Route: {data.route}</Text>
      <Text>Files: {data.files}</Text>
      <Text>Data Size: {prettyBytes(data.dataSize)}</Text>
      { zipLength &&
        <Text>ZIP Size: {prettyBytes(zipLength)}</Text> }
      { href &&
        <>
          <br />
          <Button component="a" variant="primary" href={href} download={data.fileName}>Download ZIP File</Button>
        </> }
    </>
  );
}
