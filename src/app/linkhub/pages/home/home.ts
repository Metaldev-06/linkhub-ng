import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TuiDialogContext, TuiDialogService, TuiIcon } from '@taiga-ui/core';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';

import { SocialLink } from '../../../core/interfaces/social-link.interface';
import { Redirects } from '../../../core/services/redirects';

@Component({
  selector: 'app-home',
  imports: [TuiIcon, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {
  private readonly _dialogs = inject(TuiDialogService);

  public redirects = inject(Redirects);

  public socialLinks = signal<SocialLink[]>([
    {
      id: 1,
      title: 'Instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com/aca.ing.juarez/',
    },
    {
      id: 2,
      title: 'Whatsapp',
      icon: 'phone',
      url: 'https://api.whatsapp.com/send?phone=+543704247241&text=Hola%20ACA%20Juarez',
    },
  ]);

  public downloadApp = signal([
    {
      id: 1,
      title: 'App Store',
      description:
        'Descarga la aplicación ACA Móvil desde la App Store para disfrutar de servicios y beneficios exclusivos',
      icon: '📱',
      url: 'https://apps.apple.com/ar/app/aca-movil/id990742016',
    },
    {
      id: 2,
      title: 'Google Play',
      description:
        'Descarga la aplicación ACA Móvil desde Google Play para disfrutar de servicios y beneficios exclusivos',
      icon: '📱',
      url: 'https://play.google.com/store/apps/details?id=ar.org.aca.android.edvial&hl=es_419&pli=1',
    },
  ]);

  openDialog(content: PolymorpheusContent<TuiDialogContext>) {
    this._dialogs.open(content).subscribe();
  }
}
