import { execFile } from 'child_process';
import { getBin } from './utils';

/**
 * ### Description
 *  Call a libwebp binary
 *
 * ### Examples
 * ```js
 * execute('cwebp', ['-version'], (err, version) => err? console.error(err) : console.log(version))
 * ```
 * @param name name of the libwebp bin to execute
 * @param options list of options to pass to the libwebp bin
 * @param cb callback function
 */
export function execute(
  name: string,
  options: string[],
  cb: (err: Error, stdout: string, stderr: string) => void
) {
  execFile(getBin(name), options, cb);
}
