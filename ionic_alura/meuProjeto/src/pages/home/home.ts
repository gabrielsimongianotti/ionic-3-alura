import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Carro } from '../../modelos/carro';
import {  HttpErrorResponse } from '@angular/common/http';
import { CarrosServiceProvider } from '../../providers/carros-service/carros-service';
import { EscolhaPage } from '../escolha/escolha';
//import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecycle';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
//export class HomePage implements NavLifecycles {
export class HomePage {

  public carros: Carro[];

  constructor(public navCtrl: NavController,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private carrosService: CarrosServiceProvider) {}

  ionViewDidLoad(){
     //mensagem do loaging
     let loading = this._loadingCtrl.create({
      content: 'carregamento carros'
    });
    //faz o loading aparecer
    loading.present();

    //paga a raquisição http e faz aparecer na tela
    this.carrosService.lista()
    .subscribe(
        (carros) => {
          this.carros = carros;
          //tira o loadingquando a tela carrega
          loading.dismiss();
        },
        //se ouver um erro no processo de conexão, esse comando é rodado
        (err: HttpErrorResponse) => {
          console.log(err);

          loading.dismiss();
          //caixa de erro
          this._alertCtrl.create({
            title:'Falha na conexão',
            subTitle:'Não foi possivel carregar a lista de carros, tente nova mente mais tarde.',
            buttons:[
              {text:'ok'}
            ]
          }).present();//metodo que faz aparecer e a caixa de erro na tela
        }        
      )

  }
  selecionaCarro(carro:Carro){
    console.log(carro);
    this.navCtrl.push(EscolhaPage.name,{
      carroSelecionado: carro
    })
  }
}
