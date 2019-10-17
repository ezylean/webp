// tslint:disable:no-expression-statement
import test from 'ava';
import { execute } from './execute';

test.cb('version', t => {
  execute('cwebp', ['-version'], (err, out) => {
    err ? t.fail(err.message) : t.is(out.trim(), '1.0.3');
    t.end();
  });
});
