
import React, { useState } from "react";
import { FileUpload, Form, FormGroup } from "@patternfly/react-core";

import { msts2zip } from "./msts2zip";
import ZipFile from "./ZipFile";

export default function FileConvertor() {
  const [value, setValue] = useState("");
  const [filename, setFilename] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [convertedData, setConvertedData] = useState(null);
  const [isRejected, setIsRejected] = useState(false);

  const handleFileRejected = () => {
    setIsRejected(true);
  };

  const handleChange = (value, filename, _event) => {
    if (process.env.NODE_ENV !== "production") {
      console.log(filename, value);
    }

    setConvertedData(null);
    setValue(value);
    setFilename(filename);
    setIsRejected(false);

    if (filename && filename !== "" && value && value !== "") {
      setIsLoading(true);
      // HTML5 FileReader
      const reader = new FileReader();
      reader.onload = (ev) => {
        const content = ev.target.result;

        try {
          const result = msts2zip(content, filename);
          setConvertedData(result);
        } catch (error) {
          if (process.env.NODE_ENV !== "production") console.log(error);
          setIsRejected(true);
        } finally {
          setIsLoading(false);
        }
      };

      reader.readAsArrayBuffer(value);
    }
  };

  return (
    <Form>
      <FormGroup
        role="group"
        label="Activity file"
        helperTextInvalid="Invalid activity file"
        validated={isRejected ? "error" : "default"}
      >
        <FileUpload
          isDisabled={loading}
          value={value}
          filename={filename}
          filenamePlaceholder="Drag and drop an activity file or select one"
          hideDefaultPreview="true"
          validated={isRejected ? "error" : "default"}
          onChange={handleChange}
          browseButtonText="Select File"
          dropzoneProps={{
            accept: ".apk",
            onDropRejected: handleFileRejected
          }}
        />

        { convertedData &&
          <>
            <br />
            <ZipFile data={convertedData} />
          </> }
      </FormGroup>
    </Form>
  );
}
