// tslint:disable: no-console
import { mkdir } from 'fs';
import request from 'request';
import { extract as tarExtract } from 'tar';
import { Extract as zipExtract } from 'unzipper';
import { createGunzip } from 'zlib';
import { config, LIB_PATH, platforms } from './lib/utils';

mkdir(LIB_PATH, e => {
  if (e) {
    console.error(e);
  } else {
    const downloadUrls = platforms.reduce(
      (result, plateform) => {
        if (plateform.substr(0, 7) === 'windows') {
          result.zip.push(
            `${config.libwebp.repo}/libwebp-${config.libwebp.version}-${plateform}.zip`
          );
        } else {
          result.tar.push(
            `${config.libwebp.repo}/libwebp-${config.libwebp.version}-${plateform}.tar.gz`
          );
        }
        return result;
      },
      { tar: [], zip: [] }
    );

    console.log(`downloading libwebp version ${config.libwebp.version}`);

    let downloads = downloadUrls.zip.map(url => {
      return {
        stream: request(url).pipe(zipExtract({ path: LIB_PATH })),
        url
      };
    });

    downloads = downloads.concat(
      downloadUrls.tar.map(url => {
        return {
          stream: request(url)
            .pipe(createGunzip())
            .pipe(tarExtract({ cwd: LIB_PATH })),
          url
        };
      })
    );

    let remaings = platforms.length;

    downloads.map(({ url, stream }) => {
      stream.on('error', err => {
        console.error(`error while downloading: ${url}: ${err.message}`);
      });

      stream.on('close', () => {
        console.log(`${url} done`);
        remaings--;
        if (remaings === 0) {
          console.log('done');
        }
      });
    });
  }
});
