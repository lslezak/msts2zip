
import React from "react";
import { Page, PageSection } from "@patternfly/react-core";
import { useTranslation } from "react-i18next";

import FooterSection from "./FooterSection";
import HeaderSection from "./HeaderSection";
import MainSection from "./MainSection";

export default function App() {
  const { t } = useTranslation("texts");

  // translate also the page title
  document.title = t("app.title");

  return (
    <Page>
      <PageSection>
        <HeaderSection />
      </PageSection>
      <PageSection>
        <MainSection />
      </PageSection>
      <PageSection isFilled />
      <PageSection isFilled={false} variant="light">
        <FooterSection />
      </PageSection>
    </Page>
  );
}
