<h1 align="center">
  <img src="https://fakeimg.pl/900x300/ffffff/333333/?text=WebP&font=museo" alt="WebP" width="900px" />
</h1>

<p align="center">libwebp wrapper for nodejs</p>

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