import { JwtResponse } from '@/app/shared/models';
import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  private readonly httpClient = inject(HttpClient);
  private readonly _jwtToken = signal<string>('');
  public readonly isLogged = computed(() => !!this._jwtToken());

  public login(name: string, password: string) {
    return this.httpClient
      .post<JwtResponse>('/api/auth/login', {
        name,
        password,
      })
      .pipe(tap((response) => this._jwtToken.set(response.accessToken)));
  }
}
