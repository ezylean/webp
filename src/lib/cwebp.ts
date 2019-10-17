import { execute } from './execute';

/**
 *
 * ### Description
 * compresses an image using the WebP format. Input format can be either PNG, JPEG, TIFF, WebP or raw Y'CbCr samples.
 *
 * ### Examples
 * ```js
 * await cwebp('me.jpg', 'me.webp')
 * await cwebp('me.jpg', 'me.webp', '-lossless')
 * await cwebp('me.jpg', 'me.webp', '-q', '50')
 * ```
 * ### Params
 * @param input path of the input file
 * @param output path of the output WebP file
 * @param options https://developers.google.com/speed/webp/docs/cwebp
 */
export function cwebp(input: string, output: string, ...options: string[]) {
  return new Promise<string>((resolve, reject) => {
    execute(
      'cwebp',
      options.concat(['-o', output, '--', input]),
      (error, stdout) => {
        error ? reject(error) : resolve(stdout);
      }
    );
  });
}
