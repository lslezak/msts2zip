
import React from "react";
import { Card, CardTitle, CardBody, CardHeader, Page, PageSection, Text, TextContent, TextVariants } from "@patternfly/react-core";
import FileConvertor from "./FileConvertor";
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
          <Card isFlat isRounded>
            <CardHeader>
              <CardTitle component="h2">
                Select the APK activity file
              </CardTitle>
            </CardHeader>
            <CardBody>
              <FileConvertor />
            </CardBody>
          </Card>
        </PageSection>
        <PageSection isFilled />
        <PageSection isFilled={false} variant="light">
          <Text>{pkg.name}-{pkg.version}</Text>
        </PageSection>
      </Page>
    </>
  );
}
