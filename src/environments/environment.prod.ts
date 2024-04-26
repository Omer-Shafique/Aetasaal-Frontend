export const environment = {
  production: true,
  apiBase: process.env.API_BASE || 'https://workable.aetasaal.com/api/',
  apiImage: process.env.API_IMAGE || 'https://workable.aetasaal.com/api/images/',
  downloadImage: process.env.DOWNLOAD_IMAGE || 'http://54.146.103.85:3000/',
  appName: process.env.APP_NAME || 'AETASAAL',
  googleAPIKey: process.env.GOOGLE_API_KEY || 'your_google_api_key_here',
  appVersion: process.env.APP_VERSION || '1.1',
  platform: 'web'
};
