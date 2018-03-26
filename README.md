# buble-jest

[![Build Status](https://img.shields.io/travis/QingWei-Li/buble-jest.svg?style=flat-square)](https://travis-ci.org/QingWei-Li/buble-jest)
[![npm](https://img.shields.io/npm/v/buble-jest.svg?style=flat-square)](https://www.npmjs.com/package/buble-jest)

> Jest plugin to use buble and babel(handle ES Modules) for transformation

## Usage

```shell
npm i buble-jest buble -D
```

## Setup

```js
"transform": {
  "^.+\\.jsx?$": "buble-jest"
}
```

## Configuring buble


Built-in [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) so you can use `.bublerc`, `buble.config.js` or configure it in `package.json`.

*package.json*
```json
{
  "buble": {
    "transform": {
      "modules": false
    },
    "objectAssign": "Object.assign"
  }
}
```

## License

MIT
