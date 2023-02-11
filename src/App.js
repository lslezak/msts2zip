
import React from "react";
import { Card, CardHeader, Page, PageSection, Text, TextContent, TextVariants } from "@patternfly/react-core";

import InputSelectionCard from "./InputSelectionCard";
import pkg from "../package.json";

export default function App() {
  return (
    <>
      <Page>
        <PageSection>
          <Card>
            <CardHeader>
              <TextContent>
                <Text component={TextVariants.h1}>MSTS Activity Converter</Text>
                <Text>{pkg.description}</Text>
              </TextContent>
            </CardHeader>
          </Card>
        </PageSection>
        <PageSection>
          <InputSelectionCard />
        </PageSection>
        <PageSection isFilled />
        <PageSection isFilled={false} sticky="bottom" variant="light">
          <Text>{pkg.name}-{pkg.version}</Text>
        </PageSection>
      </Page>
    </>
  );
}
