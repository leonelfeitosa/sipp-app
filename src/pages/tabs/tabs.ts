import { Component } from '@angular/core';

import { HistoricoPage } from '../historico/historico';
import { EvolucaoPage } from '../evolucao/evolucao';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = HistoricoPage;
  tab3Root = EvolucaoPage;

  constructor() {

  }
}
