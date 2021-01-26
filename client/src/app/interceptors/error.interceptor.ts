import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { lowercaseFirstLetter } from 'src/util/utilities';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error) {
          switch (error.status) {
            case 400:
              const errorObj = error.error.errors;
              // BadRequest/ValidationErrors
              if (!!errorObj) {
                const object: { [key: string]: string[] } = {};
                // create a new object with camelCase keys
                Object.keys(errorObj).forEach((key) => {
                  if (!!errorObj[key]) {
                    const camelKey = lowercaseFirstLetter(key);
                    object[camelKey] = errorObj[key];
                  }
                });
                throw { flattened: Object.values(object).flat(), object };
              } else {
                // Generic BadRequest
                this.toastr.error(error.statusText, error.status);
              }
              break;
            case 401:
              // Unauthorized
              this.toastr.error(error.statusText, error.status);
              break;
            case 404:
              // NotFound
              this.router.navigateByUrl('/not-found');
              break;
            case 500:
              // ServerError
              const navigationExtras: NavigationExtras = {
                state: { error: error.error },
              };
              this.router.navigateByUrl('/server-error', navigationExtras);
              break;
            default:
              this.toastr.error('Something unexpected went wrong');
              console.error(error);
              break;
          }
        }
        return throwError(error);
      })
    );
  }
}
