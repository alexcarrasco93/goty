// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  base_url: 'http://localhost:5000/goty-fire/us-central1/api',
  firebase: {
    projectId: 'goty-fire',
    appId: '1:732761088633:web:bee0f6a9bb82b480662aa8',
    storageBucket: 'goty-fire.appspot.com',
    apiKey: 'AIzaSyCAppiPYB7-xBiwa_J0yrQ7Rg4baGWRPeU',
    authDomain: 'goty-fire.firebaseapp.com',
    messagingSenderId: '732761088633',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
