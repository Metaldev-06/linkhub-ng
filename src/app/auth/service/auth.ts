import { inject, Injectable } from '@angular/core';
import { signInWithPopup, Auth, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _auth = inject(Auth);

  singInWithGoogle() {
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
      prompt: 'select_account',
    });

    return signInWithPopup(this._auth, provider);
  }
}
