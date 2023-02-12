# MSTS Activity to ZIP Converter

[![Publish GitHub Pages](https://github.com/lslezak/msts2zip/actions/workflows/pages.yml/badge.svg)](https://github.com/lslezak/msts2zip/actions/workflows/pages.yml)
[![Eslint](https://github.com/lslezak/msts2zip/actions/workflows/eslint.yml/badge.svg)](https://github.com/lslezak/msts2zip/actions/workflows/eslint.yml)

This is a converter for the Microsoft Train Simulator (MSTS) APK activity files.
It can convert the APK files to the more commonly used ZIP format.

You can use it with [OpenRails](http://openrails.org/)
or when your original MSTS unpacking utility does not work properly. After
downloading the converted ZIP activity file unpack it into your MSTS base
directory, or if you use OpenRails, then into the selected profile.

## The On-line Version

You can access the converter on-line at https://lslezak.github.io/msts2zip/.

## Local Version

You can download the converter from https://lslezak.github.io/msts2zip/msts2zip.zip
and use it locally from your machine. Just unpack the `msts2zip.zip` archive
and open the `index.html` file in a web browser.

## Implementation Notes

The conversion happens directly in your browser the activity file is processed
locally. That means you do not even need Internet connection for the converter.

## Building from Sources

First install the needed NPM packages:

```
npm install
```

Then build the page from the sources:

```
npm run build
```

The built page is saved in the `dist/` subdirectory.

## Development

To run the web application in development mode run

```shell
HOST=localhost NODE_ENV=development npm run start:dev
```

It will automatically open the http://localhost:9000 page in your preferred
browser. This also enables the hot reload feature so the page is automatically
updated in the browser whenever you change a source file.

## Translations

For translations it uses the [react-i18next](https://react.i18next.com/)
framework. See the translations in the `src/translations/*/*.json` files
and [tutorial](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-i18next).
It honors the language settings in the browser using the
[i18next-browser-languageDetector](https://github.com/i18next/i18next-browser-languageDetector)
plugin.
