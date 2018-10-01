import { LoadingController } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the LoadControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadControllerProvider {
  public loader;

  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
    console.log("Hello LoadControllerProvider Provider");
  }

  abreCarregando(texto: string) {
    this.loader = this.loadingCtrl.create({
      content: texto
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }
}
