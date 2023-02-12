
import React from "react";
import { Button, Text } from "@patternfly/react-core";
import { useTranslation } from "react-i18next";

export default function LangButtons() {
  const { i18n } = useTranslation("texts");

  return (
    <Text>
      <Button
        isInline
        isSmall
        variant="link"
        onClick={() => i18n.changeLanguage("cs")}
      >
        CZ
      </Button>
      { " / " }
      <Button
        isInline
        isSmall
        variant="link"
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </Button>
    </Text>
  );
}
