import { bootstrapApplication } from '@angular/platform-browser';
import { AngularTestStructureComponent } from './app/components/angular-test-structure/angular-test-structure.component';
import { importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './app/store/app.state';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AngularTestStructureComponent, {
  providers: [
    importProvidersFrom(
      NgxsModule.forRoot([AppState], { developmentMode: true }),
      HttpClientModule,
      BrowserAnimationsModule
    ),
  ],
}).catch((err) => console.error(err));
