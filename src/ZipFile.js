
import React, { useEffect, useState } from "react";
import { Button, Text } from "@patternfly/react-core";
import { useTranslation } from "react-i18next";
import prettyBytes from "pretty-bytes";

export default function ZipFile({ data }) {
  const [zipLength, setZipLength] = useState(null);
  const [href, setHref] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation("texts");

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);

      data.zipFile.then((zipData) => {
        if (process.env.NODE_ENV !== "production") {
          console.log("ZIP size", zipData.length);
        }
        const blob = new Blob([zipData], { type: "application/zip" });
        const urlHref = URL.createObjectURL(blob);
        setZipLength(zipData.length);
        setHref(urlHref);
      });
    }

    return () => {
      if (href) {
        if (process.env.NODE_ENV !== "production") console.log("Blob URL cleanup");

        URL.revokeObjectURL(href);
      }
    };
  }, [isLoading, data.zipFile, href]);

  return (
    <>
      <Text>{t("zipfile.route")} {data.route}</Text>
      <Text>{t("zipfile.files")} {data.files}</Text>
      <Text>{t("zipfile.datasize")} {prettyBytes(data.dataSize)}</Text>
      { zipLength &&
        <Text>{t("zipfile.zipsize")} {prettyBytes(zipLength)}</Text> }
      { href &&
        <>
          <br />
          <Button component="a" variant="primary" href={href} download={data.fileName}>{t("zipfile.button")}</Button>
        </> }
    </>
  );
}
