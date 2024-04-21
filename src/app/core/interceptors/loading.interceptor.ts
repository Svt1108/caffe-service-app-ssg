import { finalize, Observable } from 'rxjs';
import { SpinnerService } from '../../spinner/spinner.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private spinnerService: SpinnerService) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.totalRequests += 1;
    this.spinnerService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests -= 1;
        if (this.totalRequests === 0) {
          this.spinnerService.setLoading(false);
        }
      })
    );
  }
}
