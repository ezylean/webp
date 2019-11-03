// tslint:disable:no-expression-statement
import test from 'ava';
import { execute } from './execute';
import { config } from './utils';

test('version', async t => {
  const version = await execute('cwebp', ['-version']);
  t.is(version, config.libwebp.version);
});

test.cb('version cb', t => {
  execute('cwebp', ['-version'], (err, version) => {
    err ? t.fail(err.message) : t.is(version, config.libwebp.version);
    t.end();
  });
});
