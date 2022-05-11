import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  requests: HttpRequest<any>[] = [];

  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requests.push(req);
    console.log(this.requests);
    this.loaderService.setLoader(true);
    return Observable.create((observer: { next: (arg0: HttpResponse<any>) => void; error: (arg0: any) => void; complete: () => void; }) => {
      const subscription = next.handle(req).subscribe(
        event => {
          if(event instanceof HttpResponse){
            observer.next(event);
          }
        },
        err => {
          this.showErrorMessage(err);
          observer.error(err);
        },
        () => {
          observer.complete();
        });
      return () => {
        this.removeRequest(req);
        subscription.unsubscribe();
      }
    });
  }

  removeRequest(req: HttpRequest<any>){
    const index = this.requests.indexOf(req);
    if(index >= 0){
      this.requests.splice(index,1);
    };
    if(this.requests.length === 0){
      this.loaderService.setLoader(false);
    }
  }

  showErrorMessage(error: { error: any; }){
    let errorMsg = "";
    if(error.error instanceof ErrorEvent){
      errorMsg = `Error: ${error.error.message}`;
    }else{
      errorMsg = `Error Code: ${error.error.status}, Message: ${error.error.message}`;
    }
  }
}
