// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBase: process.env.API_BASE || 'http://localhost:3000/api/',
  apiImage: process.env.API_IMAGE || 'https://localhost:3000/images/',
  downloadImage: process.env.DOWNLOAD_IMAGE || 'http://localhost:3000/',
  appName: process.env.APP_NAME || 'AETASAAL',
  googleAPIKey: process.env.GOOGLE_API_KEY || 'your_google_api_key_here',
  appVersion: process.env.APP_VERSION || '1.1',
  platform: 'web'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
