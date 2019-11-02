<h1 align="center">
  <img src="https://fakeimg.pl/900x300/ffffff/333333/?text=WebP&font=museo" alt="WebP" width="900px" />
</h1>

<p align="center">libwebp wrapper for nodejs</p>

<p align="center">
<a href="https://opensource.org/licenses">
  <img src="https://img.shields.io/github/license/ezylean/webp.svg" alt="License" />
</a>
<a href="https://ezylean.github.io/webp">
  <img src="https://img.shields.io/badge/docs-typedoc-%239B55FC.svg" alt="Docs: typedoc" />
</a>
<a href="https://github.com/ezylean/webp/issues">
  <img src="https://img.shields.io/github/issues-raw/ezylean/webp.svg" alt="GitHub issues" />
</a>
<a href="https://codeclimate.com/github/ezylean/webp/maintainability" >
  <img src="https://img.shields.io/codeclimate/maintainability-percentage/ezylean/webp.svg" alt="Maintainability" />
</a>
<a href="https://david-dm.org/ezylean/webp">
  <img src="https://david-dm.org/ezylean/webp.svg" alt="Dependencies status" />
</a>
<a href="https://david-dm.org/ezylean/webp?type=dev">
  <img src="https://david-dm.org/ezylean/webp/dev-status.svg" alt="Dev Dependencies status" />
</a>
<a href="https://github.com/Microsoft/TypeScript">
  <img src="https://img.shields.io/badge/made%20with-typescript-%234B9DD5.svg" alt="Made with: typescript" />
</a>
<a href="https://github.com/prettier/prettier">
  <img src="https://img.shields.io/badge/code%20style-prettier-ff69b4.svg" alt="Code style: prettier" />
</a>
</p>

## Install

```shell
npm i @ezy/webp
```

## Usage

### convert to webp

```js
import { cwebp } from '@ezy/webp';

await cwebp('me.jpg', 'me.webp');
```

### convert from webp

```js
import { dwebp } from '@ezy/webp';

await dwebp('me.webp', 'me.png');
```