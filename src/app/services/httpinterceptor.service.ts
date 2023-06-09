import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor{

  constructor(private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
   

          req = req.clone({
        setHeaders: {
            // Accept: 'multipart/form-data', 
          // 'Content-Type': 'application/json',
        
          // Authorization: `"Bearer " ${sessionStorage.getItem('Token')}`
        }
        
      });    
   
      this.spinnerService.requestStarted();
      return this.handler(next, req);
  }

  handler(next, req) {
      return next.handle(req)
          .pipe(
              tap(
                  (event) => {
                      if (event instanceof HttpResponse) {
                          this.spinnerService.requestEnded();
                      }
                  },
                  (error: HttpErrorResponse) => {
                    
                      this.spinnerService.resetSpinner();
                      throw error;
                    
                  }
              ),
          );
  }

}