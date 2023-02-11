
import React from "react";
import { Card, CardTitle, CardBody, CardHeader } from "@patternfly/react-core";

import InputFileSelection from "./InputFileSelection";

export default function InputSelectionCard() {
  return (
    <Card isFlat isRounded>
      <CardHeader>
        <CardTitle component="h2">
          Select the APK activity file
        </CardTitle>
      </CardHeader>
      <CardBody>
        <InputFileSelection />
      </CardBody>
    </Card>
  );
}
