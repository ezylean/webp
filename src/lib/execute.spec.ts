// tslint:disable:no-expression-statement
import test from 'ava';
import { execute } from './execute';
import { config } from './utils';

test.cb('version', t => {
  execute('cwebp', ['-version'], (err, out) => {
    err ? t.fail(err.message) : t.is(out.trim(), config.libwebp.version);
    t.end();
  });
});
