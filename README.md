# MVTK Client Library for Node.js

node.jsでMVTKサービスを使うためのパッケージです。


## Table of contents

* [Usage](#usage)
* [Example](#code-samples)
* [Jsdoc](#jsdoc)
* [License](#license)


## Usage

```sh
npm install @motionpicture/mvtk
```

```js
const MVTK = require('@motionpicture/mvtk');
```

When using the MVTK Service SDK, you must provide connection information. This can be provided using:

### Environment variables

| Name           | Required | Value         | Purpose          |
| -------------- | -------- | ------------- | ---------------- |
| `DEBUG`        | false    | mvtk:* | Debug            |

### クレジットカード決済(即時売上)の例

```js
const mvtk = require('@motionpicture/mvtk');

```

## Code Samples

コードサンプルは [example](https://github.com/motionpicture/mvtk/tree/master/example) にあります。


## Jsdoc

`npm run doc`でjsdocを作成できます。./docに出力されます。

## License

ISC
