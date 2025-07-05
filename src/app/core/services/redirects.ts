import { inject, Injectable, signal } from '@angular/core';
import { collection, Firestore, collectionData } from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';

import { catchError, Observable, tap, throwError } from 'rxjs';

import { RedirectionButton } from '../interfaces/redirection-button.interface';

const PATH = 'links';

@Injectable({
  providedIn: 'root',
})
export class Redirects {
  private readonly _firestore = inject(Firestore);
  private readonly _collection = collection(this._firestore, PATH);

  public loading = signal<boolean>(true);

  public getLinks = toSignal(
    (
      collectionData(this._collection, { idField: 'id' }) as Observable<
        RedirectionButton[]
      >
    ).pipe(
      tap(() => {
        this.loading.set(false);
      }),
      catchError((error) => {
        this.loading.set(false);
        throwError(() => new Error(`Error loading redirects: ${error}`));
        return [];
      }),
    ),
    {
      initialValue: [],
    },
  );
}
