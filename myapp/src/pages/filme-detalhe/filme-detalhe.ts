import { LoadControllerProvider } from './../../providers/load-controller/load-controller';
import { MovieProvider } from "./../../providers/movie/movie";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the FilmeDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-filme-detalhe",
  templateUrl: "filme-detalhe.html"
})
export class FilmeDetalhePage {
  public filme;
  public filmeId;
  public loader;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider,
    public loadController:LoadControllerProvider
  ) {}

  ionViewDidEnter() {
    this.carregarFilmeDetalhe();
  }

  carregarFilmeDetalhe(): void {
    this.loadController.abreCarregando("Carregando filme...");
    this.filmeId = this.navParams.get("id");
    this.movieProvider.getMovieDetails(this.filmeId).subscribe(
      data => {
        let retorno = data as any;
        //let retorno = (data as any)._body; transforma em any para acessar .body
        //this.filme = JSON.parse(retorno);  transforma em JSON caso venha em string
        this.filme = retorno;
        this.loadController.fechaCarregando();
      },
      error => {
        this.loadController.fechaCarregando();
        console.log(error);
      }
    );
  }

}
