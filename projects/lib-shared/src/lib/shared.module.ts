import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GoogleApiModule, NG_GAPI_CONFIG } from "ng-gapi";
import { gapiClientConfig } from './GoogleApi/google-api.variable';


@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  exports: [
    FlexLayoutModule
  ]
})
export class SharedModule { }
