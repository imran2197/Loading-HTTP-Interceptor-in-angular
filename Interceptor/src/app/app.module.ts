import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientLoaderComponent } from './components/client-loader/client-loader.component';
import { HttpInterceptorService } from './interceptors/http.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserIdleModule } from 'angular-user-idle';

@NgModule({
  declarations: [
    AppComponent,
    ClientLoaderComponent,
    UsersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserIdleModule.forRoot({idle: 2, timeout: 300, ping: 120})
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
