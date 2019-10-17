// tslint:disable:no-expression-statement
import test from 'ava';
import * as path from 'path';
import { cwebp } from './cwebp';
import { PACKAGE_PATH } from './utils';

test('convert jpg', async t => {
  await cwebp(
    path.join(PACKAGE_PATH, 'test_images', 'single-property-06.jpg'),
    path.join(PACKAGE_PATH, 'test_images', 'single-property-06.webp')
  );

  t.pass();
});
