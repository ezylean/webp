import { execute } from './execute';

/**
 * ### Description
 * Convert a GIF image to WebP
 *
 * ### Examples
 * ```js
 * await gif2webp('me.gif', 'me.webp')
 * await gif2webp('me.gif', 'me.webp', '-mixed')
 * ```
 *
 * ### Params
 * @param input path of the input file
 * @param output path of the output WebP file
 * @param options https://developers.google.com/speed/webp/docs/gif2webp
 */
export function gif2webp(input: string, output: string, ...options: string[]) {
  return execute('gif2webp', options.concat(['-o', output, '--', input]));
}
