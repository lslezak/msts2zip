# MSTS Activity to ZIP Converter

This is a converter for the Microsoft Train Simulator (MSTS) APK activity files.
It can convert the APK files to the more commonly used ZIP format.

You can use it with [OpenRails](http://openrails.org/)
or when your original MSTS unpacking utility does not work properly.

## The On-line Version

## Unpacking the ZIP File

After downloading the converted ZIP file unpack it into your MSTS base directory,
or if you use OpenRails, then into the selected profile.

## Usage

### Installation

First install the needed NPM packages:

```
npm install
```

And build the page from the sources:

```
npm run build
```

The page is saved in the `dist/` subdirectory.

### Development

To run the web application in development mode run

```shell
HOST=localhost NODE_ENV=development npm run start:dev
```

It will automatically open the http://localhost:9000 page in your preferred
browser.
