// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { environment } from '../environments/environment';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// import { provideFunctions, getFunctions } from '@angular/fire/functions';
// import { provideMessaging, getMessaging } from '@angular/fire/messaging';
// import { provideStorage, getStorage } from '@angular/fire/storage';
// import { routes } from './app.routes';
// import { provideRouter } from '@angular/router';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideFirebaseApp(() => initializeApp(environment.firebase)),
//     importProvidersFrom(
//       provideFirestore(() => getFirestore()),
//       provideAuth(() => getAuth()),
//       provideFunctions(() => getFunctions()),
//       provideStorage(() => getStorage()),
//       provideMessaging(() => getMessaging())
//     ),
//   ],
// };

import { FirebaseOptions } from '@firebase/app';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase as FirebaseOptions)),
    provideFirestore(() => getFirestore()),
  ],
};
