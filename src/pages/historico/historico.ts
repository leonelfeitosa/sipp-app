import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginPage } from '../login/login';
import { MostraHistoricoPage } from '../mostra-historico/mostra-historico';
//import * as io from 'socket.io-client';
import { BackgroundMode } from '@ionic-native/background-mode';

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class HistoricoPage {
  apiUrl = 'http://162.243.161.30:3015/api/v1/';
  token: string;
  expires: string;
  socket:any;
  idUsu: string;
  notificacao: string;
  existe: boolean = true;
  public dadosPaciente: any = {
    nome: ""
  }

  public data: Date;

  public listaConsultasTodas: any = [];

  headers: HttpHeaders;

  constructor(public navCtrl: NavController, public http: HttpClient, private alertCtrl: AlertController, private backgroundMode: BackgroundMode) {
    this.backgroundMode.enable();
    this.headers = new HttpHeaders();
    this.token = localStorage.getItem("tokenAppPM");
    this.expires = localStorage.getItem("expiresAppPM");
    this.headers = this.headers.append('Authorization', this.token);
    if(new Date(this.expires) < new Date()) {
      this.navCtrl.push(LoginPage);
    }
    this.idUsu = localStorage.getItem('idUsuaAppPM');
    //this.socket = io('http://162.243.161.30:4555');
    //this.receive();
    this.buscaPaciente();
    this.buscaConsultas();
  }

  buscaPaciente() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'paciente-mobile', {headers: this.headers}).subscribe(res => {
        this.dadosPaciente = res;
      }, error => {
        console.log("error");
      });
    });
  }

  buscaConsultas() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'paciente-mobile/consultas', {headers: this.headers}).subscribe(res => {
        this.listaConsultasTodas = res;
        if(this.listaConsultasTodas.length > 0){
          this.data = res[0].data;
          this.existe = true;
          console.log(this.data);
        }else{
          this.existe = false;
        }
      }, error => {
        console.log("error");
      });
    });
  }

  buscaHistorico(id, historico, data, titulo){
    this.navCtrl.push(MostraHistoricoPage, {
      id: id,
      historico: historico,
      titulo: titulo,
      data: data
    });
  }

  sair(){
    this.navCtrl.push(LoginPage, {
      sair: '1'
    });
  }

  notificacaoAlert() {
    let alert = this.alertCtrl.create({
      title: 'Notificação',
      subTitle: this.notificacao,
      buttons: ['Fechar']
    });
    alert.present();
  }

  receive() {
        this.socket.on('notificacao', (notificacao, id) => {
            if(JSON.stringify(id) === JSON.stringify(this.idUsu)){
              this.notificacao = notificacao;
              this.notificacaoAlert();
              this.buscaConsultas();
            }
        });
  }
  
}
