import React from "react";
import ReactDOM from "react-dom";
import "@patternfly/react-core/dist/styles/base.css";
import App from "./App";

// translations
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import texts_en from "./translations/en/texts.json";
import texts_cs from "./translations/cs/texts.json";

// detect the default language from browser or cookies
// see https://github.com/i18next/i18next-browser-languageDetector
i18next.use(LanguageDetector).init({
  // React already does escaping
  interpolation: { escapeValue: false },
  fallbackLng: "en",
  resources: {
    en: {
      texts: texts_en
    },
    cs: {
      texts: texts_cs
    },
  },
});

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);
