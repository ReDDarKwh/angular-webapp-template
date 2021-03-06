import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBar,
  MatSnackBarModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatProgressBarModule
} from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { routerConfig } from './routes';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { ToastComponent } from './components/shared/toast/toast.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faExclamation,
  faCheckCircle,
  faSpinner,
  faUser,
  faPlay,
  faPause
} from '@fortawesome/free-solid-svg-icons';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClientJsonpModule
} from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AjaxCommService } from './services/ajax-comm.service';

import { ScrollingModule, ScrollDispatchModule } from '@angular/cdk/scrolling';

import { SummaryDialogComponent } from './components/summary-dialog/summary-dialog.component';

library.add(faPause, faExclamation, faCheckCircle, faSpinner, faUser, faPlay);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserAuthComponent,
    ToastComponent,
    LoginComponent,
    SummaryDialogComponent
  ],
  imports: [
    ScrollDispatchModule,
    ScrollingModule,
    HttpClientJsonpModule,
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routerConfig),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [AjaxCommService],
  entryComponents: [ToastComponent, SummaryDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
