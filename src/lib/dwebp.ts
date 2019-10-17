import { execute } from './execute';

/**
 *
 * ### Description
 *  Decompress a WebP file to an image file
 *
 * ### Examples
 * ```js
 * await dwebp('me.webp', 'me.png')
 * await dwebp('me.webp', 'me.ppm', '-ppm')
 * ```
 * ### Params
 * @param input path of the output WebP file
 * @param output path of the output file (PNG format by default)
 * @param options https://developers.google.com/speed/webp/docs/dwebp
 */
export function dwebp(input: string, output: string, ...options: string[]) {
  return new Promise((resolve, reject) => {
    execute(
      'dwebp',
      options.concat(['-o', output, '--', input]),
      (error, stdout) => {
        error ? reject(error) : resolve(stdout);
      }
    );
  });
}
