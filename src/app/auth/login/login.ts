import { Component, inject } from '@angular/core';

import { TuiIcon, tuiIconResolverProvider } from '@taiga-ui/core';

import { AuthService } from '../service/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [TuiIcon],
  templateUrl: './login.html',
  styleUrl: './login.css',
  providers: [
    tuiIconResolverProvider((icon) =>
      icon.includes('/') ? icon : `/image/${icon}.svg`,
    ),
  ],
})
export default class Login {
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  public async loginWithGoogle() {
    try {
      await this._authService.singInWithGoogle();
      this._router.navigate(['/credentials-wifi']);
    } catch (error) {
      console.error('Error during Google login:', error);
      // Handle the error appropriately, e.g., show a notification to the user
    }
  }
}
