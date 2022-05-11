import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("HTTP Interceptor Works", request);
    if(request.url.startsWith('assets') || request.url.includes('logout')){
      return next.handle(request);
    }else {
      const apiReq = request.clone({
        url: "https://jsonplaceholder.typicode.com/users",
        headers: request.headers.set("Authorization", "1234567890").set("Content-Type", "application/json")
      });
      return next.handle(apiReq);
    }
  }
}
