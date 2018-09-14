import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {


  public objeto_feed = {
    name: "Leonel",
    date: "13/09/2018",
    evolucao: "solidão nos atingiuns",
    datas: ["Leonel","Correia",1234,"@@@@"],
  }

  constructor(public navCtrl: NavController) {

  }

}
