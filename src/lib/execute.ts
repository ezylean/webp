import { execFile } from 'child_process';
import { getBin } from './utils';

/**
 * ### Description
 *  Call a libwebp binary
 *
 * ### Examples
 * #### using promise
 * ```js
 * await execute('cwebp', ['-version'])
 * ```
 * #### using node-callback
 * ```js
 * execute('cwebp', ['-version'], (err, version) => err? console.error(err) : console.log(version))
 * ```
 *
 * @param name name of the libwebp bin to execute
 * @param options list of options to pass to the libwebp bin
 * @param cb callback function
 */
export function execute(name: string, options: string[]): Promise<string>;
export function execute(
  name: string,
  options: string[],
  cb: (err: Error | void, result?: string) => void
): void;
export function execute(
  name: string,
  options: string[],
  cb?: (err: Error | void, result?: string) => void
): Promise<string> | void {
  if (!cb) {
    return new Promise((resolve, reject) => {
      execFile(getBin(name), options, createExecuteCallback(resolve, reject));
    });
  } else {
    execFile(
      getBin(name),
      options,
      createExecuteCallback(result => cb(undefined, result), cb)
    );
  }
}

function createExecuteCallback(
  resolve: (result: string) => void,
  reject: (err: Error) => void
) {
  return (err: Error, stdout: string, infos: string) =>
    err ? reject(err) : resolve(stdout.trim() || infos.trim());
}
