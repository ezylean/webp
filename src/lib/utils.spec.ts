// tslint:disable:no-expression-statement
import test from 'ava';
import { access } from 'fs';
import { promisify } from 'util';
import { getBin } from './utils';

const accessP = promisify(access);

test('getBin', async t => {
  await accessP(getBin('cwebp'));
  t.pass();
});
