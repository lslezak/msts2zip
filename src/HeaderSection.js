
import React from "react";
import { Card, CardActions, CardHeader, Text, TextContent, TextVariants } from "@patternfly/react-core";
import { useTranslation } from "react-i18next";

import LangButtons from "./LangButtons";

export default function HeaderSection() {
  const { t } = useTranslation("texts");

  return (
    <Card>
      <CardHeader>
        <CardActions>
          <LangButtons />
        </CardActions>
        <TextContent>
          <Text component={TextVariants.h1}>{t("app.title")}</Text>
          <Text>{t("app.description")}</Text>
        </TextContent>
      </CardHeader>
    </Card>
  );
}
