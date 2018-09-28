import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public movieProvider:MovieProvider) {
  }



  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(data=>{
      console.log(data)
    })
    , error=>{
      console.log(error);
    }
  }


}
