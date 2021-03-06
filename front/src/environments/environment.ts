// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  server: 'https://app-twitter.dev.sinay.fr', // a changer,
  urlDjango: 'http://localhost:8000/',
  elasticSearchServer: 'http://localhost:9500/twitter-learning-',
  urlLoginIframe: 'https://platform.dev.sinay.fr/account/auth/login',
  urlLogoutIframe: 'https://platform.dev.sinay.fr/account/auth/logout'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
