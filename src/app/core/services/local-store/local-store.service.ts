import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  setTokens(token: string, refreshToken: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  }

  clearTokens() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  }

  getTokens() {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    return { token: token ?? '', refreshToken: refreshToken ?? '' };
  }

}
