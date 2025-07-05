import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TuiRoot } from '@taiga-ui/core';

import { Header } from './linkhub/layout/header/header';
import { Footer } from './linkhub/layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TuiRoot, Footer, TuiRoot],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'linkhub';
}
