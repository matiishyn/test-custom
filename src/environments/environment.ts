// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC1lJNoC-UAOUMd6REC6SWF7XevNQv9MwI",
    authDomain: "auger-staging.firebaseapp.com",
    databaseURL: "https://auger-staging.firebaseio.com",
    projectId: "auger-staging",
    storageBucket: "auger-staging.appspot.com",
    messagingSenderId: "387469027681"
  }
};
