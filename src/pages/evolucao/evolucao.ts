import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'page-evolucao',
  templateUrl: 'evolucao.html'
})
export class EvolucaoPage {
  apiUrl = 'http://localhost:3000/api/v1/';
  dados: Object = {
    msg: ''
  }
  public objeto_feed = {
    name: "Leonel",
    date: "13/09/2018",
    datas: ["Leonel","Correia",1234,"@@@@"],
    evolucao: "solidão nosmexer do lugar e isso nos deixou ans",
  }


  constructor(public navCtrl: NavController, public http: HttpClient) {
      this.testeApi();
  }

  testeApi() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/paciente-mobile/teste').subscribe(res => {
        this.dados = res;
        console.log("#########: "+this.dados);
      }, error => {
        console.log("Erro não tem acesso!");
      });
    });
  }
}
