
import React, { useState } from "react";
import { Button, FileUpload, FormGroup } from "@patternfly/react-core";

import { msts2zip } from "./msts2zip";
import ZipFile from "./ZipFile";

export default function InputFileSelection() {
  const [value, setValue] = useState("");
  const [filename, setFilename] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [convertedData, setConvertedData] = useState(null);

  const handleChange = (value, filename, _event) => {
    console.log(value);
    console.log(filename);
    setValue(value);
    setFilename(filename);
  };

  const load = () => {
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
        />
        <br />
        <Button variant="primary" onClick={load} isLoading={loading} isDisabled={filename === "" || loading}>Convert File</Button>

        { convertedData &&
          <ZipFile data={convertedData} />}
      </FormGroup>
    </>
  );
}
