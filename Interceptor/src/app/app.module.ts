import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientLoaderComponent } from './components/client-loader/client-loader.component';
import { HttpInterceptorService } from './interceptors/http.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ClientLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
