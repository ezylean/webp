import * as path from 'path';

export const platforms = [
  'mac-10.14',
  'linux-x86-64',
  'windows-x64',
  'windows-x86'
];

export const currentPlatform =
  process.platform === 'darwin'
    ? platforms[0]
    : process.platform === 'linux'
    ? platforms[1]
    : process.platform === 'win32'
    ? process.arch === 'x64'
      ? platforms[2]
      : platforms[3]
    : 'unsupported';

export const PACKAGE_PATH = path.join(__dirname, '..', '..');
export const LIB_PATH = path.join(PACKAGE_PATH, 'lib');

// tslint:disable-next-line: no-var-requires
const packageJson = require(path.join(PACKAGE_PATH, 'package.json'));
export const config = packageJson[packageJson.name];

export function getBin(name: string) {
  return path.join(
    LIB_PATH,
    `libwebp-${config.libwebp.version}-${currentPlatform}`,
    'bin',
    process.platform === 'win32' ? `${name}.exe` : name
  );
}
