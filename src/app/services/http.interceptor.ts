import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorRequest implements HttpInterceptor {

  constructor(private store: Store, private authService: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken()
    const request = req.clone({setHeaders: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
  }});
    return next.handle(request);
  }
}
