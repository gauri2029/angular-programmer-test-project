import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxsDevelopmentModule, NgxsModule } from '@ngxs/store';
import { AppState } from './store/app.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideAnimationsAsync(),
    importProvidersFrom(
      NgxsModule.forRoot([AppState]),
    )
  ]
};
