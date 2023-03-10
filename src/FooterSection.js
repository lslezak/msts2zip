
import React from "react";
import { Flex, FlexItem, Text, TextVariants } from "@patternfly/react-core";
import GithubIcon from "@patternfly/react-icons/dist/esm/icons/github-icon";
import pkg from "../package.json";

export default function FooterSection() {
  return (
    <Flex justifyContent={{ default: "justifyContentSpaceBetween" }}>
      <FlexItem>{pkg.name}-{pkg.version}</FlexItem>
      <FlexItem>
        <Text component={TextVariants.a} target="_blank" href="https://github.com/lslezak/msts2zip">
          <GithubIcon /> lslezak/msts2zip
        </Text>
      </FlexItem>
    </Flex>
  );
}
