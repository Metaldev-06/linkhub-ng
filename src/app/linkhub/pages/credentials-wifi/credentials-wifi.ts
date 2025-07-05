import { Component, inject } from '@angular/core';

import { Clipboard } from '@angular/cdk/clipboard';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-credentials-wifi',
  imports: [],
  templateUrl: './credentials-wifi.html',
  styleUrl: './credentials-wifi.css',
})
export default class CredentialsWifi {
  private readonly _clipboard = inject(Clipboard);
  private readonly _alert = inject(TuiAlertService);

  public password = 'Diaz2025';
  public name = 'Starlink - Diaz Servicios SRL';

  copyPassword() {
    this._clipboard.copy(this.password);
    this._alert
      .open('', {
        label: 'Contraseña copiada al portapapeles',
        appearance: 'positive',
      })
      .subscribe();
  }
}
