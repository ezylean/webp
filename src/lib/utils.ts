import * as path from 'path';

export const platform =
  process.platform === 'darwin'
    ? 'mac-10.14'
    : process.platform === 'linux'
    ? 'linux-x86-64'
    : process.platform === 'win32'
    ? process.arch === 'x64'
      ? 'windows-x64'
      : 'windows-x86'
    : 'unsupported';

export const PACKAGE_PATH = path.join(__dirname, '..', '..', '..');
export const LIB_PATH = path.join(PACKAGE_PATH, 'lib');

export function getBin(name: string, version: string = '1.0.3') {
  return path.join(
    LIB_PATH,
    `libwebp-${version}-${platform}`,
    'bin',
    process.platform === 'win32' ? `${name}.exe` : name
  );
}

// export function getDownloadUrls(version: string) {
//   `//storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-${version}-windows-x86.zip`
//   `//storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-${version}-windows-x64.zip`
//   `//storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-${version}-linux-x86-64.tar.gz`
//   `//storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-${version}-mac-10.14.tar.gz`
// }
