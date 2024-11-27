import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularTestStructureComponent } from './components/angular-test-structure/angular-test-structure.component';
import { AngularTestStructureDetailComponent } from './components/angular-test-structure-detail/angular-test-structure-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './store/app.state'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    NgxsModule.forRoot([AppState], { developmentMode: true }),
    AngularTestStructureComponent,
    AngularTestStructureDetailComponent
  ]
})
export class AppModule {}
