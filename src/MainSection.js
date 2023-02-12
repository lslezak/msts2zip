
import React from "react";
import { Card, CardTitle, CardBody, CardHeader } from "@patternfly/react-core";
import { useTranslation } from "react-i18next";

import FileConvertor from "./FileConvertor";

export default function MainSection() {
  const { t } = useTranslation("texts");

  return (
    <Card isFlat isRounded>
      <CardHeader>
        <CardTitle component="h2">
          {t("app.card.title")}
        </CardTitle>
      </CardHeader>
      <CardBody>
        <FileConvertor />
      </CardBody>
    </Card>
  );
}
