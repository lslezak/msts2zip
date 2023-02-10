
import React, { useState } from "react";
import { Card, CardHeader, Page, PageSection, Text, TextContent, TextVariants } from "@patternfly/react-core";

import InputSelectionCard from "./InputSelectionCard";

const initialState = {
  name: null,
  data: null,
};

export default function App() {
  const [state, setState] = useState(initialState);

  const dataCallback = (data, name) => {
    console.log("Loaded data from", name);
    setState({ ...state, data, name });
  };

  return (
    <>
      <Page>
        <PageSection>
          <Card>
            <CardHeader>
              <TextContent>
                <Text component={TextVariants.h1}>MSTS Activity Converter</Text>
              </TextContent>
            </CardHeader>
          </Card>
        </PageSection>
        <PageSection>
          <InputSelectionCard dataCallback={dataCallback} />
        </PageSection>
      </Page>
    </>
  );
}
