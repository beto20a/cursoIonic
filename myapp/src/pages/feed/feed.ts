import { LoadControllerProvider } from "./../../providers/load-controller/load-controller";
import { FilmeDetalhePage } from "./../filme-detalhe/filme-detalhe";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams
} from "ionic-angular";
import { MovieProvider } from "../../providers/movie/movie";

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-feed",
  templateUrl: "feed.html"
})
export class FeedPage {
  public lista_filmes = new Array<any>();
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public page = 1;
  public infiniteScroll;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieProvider: MovieProvider,
    public loadController: LoadControllerProvider
  ) {}

  ionViewDidEnter() {
    if (this.lista_filmes.length == 0) {
      this.carregarFilmes();
    }
  }

  carregarFilmes(newpage: boolean = false): void {
    this.loadController.abreCarregando("Carregando filmes...");
    this.movieProvider.getLatestMovies(this.page).subscribe(data => {
      const objeto_retorno = data as any;

      if (newpage) {
        this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
        this.infiniteScroll.complete();
      } else {
        this.lista_filmes = objeto_retorno.results;
      }

      console.log(this.lista_filmes);
      this.loadController.fechaCarregando();
      if (this.isRefreshing) {
        this.refresher.complete();
        this.isRefreshing = false;
      }
    }),
      error => {
        console.log(error);
        this.loadController.fechaCarregando();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      };
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();
  }

  abrirDetalhes(filme): void {
    this.navCtrl.push(FilmeDetalhePage, { id: filme.id });
    console.log(filme);
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }
}
