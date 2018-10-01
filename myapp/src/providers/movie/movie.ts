import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath:string ="https://api.themoviedb.org/3";
  private apiKey:string = "07ece915d6d948b935aa0aa75eeca8f9";
  private apiLanguage= "pt-br"

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(page = 1){
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=`+this.apiKey+"&language="+this.apiLanguage);
  }

  getMovieDetails(filmeId){
    return this.http.get(this.baseApiPath + `/movie/${filmeId}?api_key=`+this.apiKey+"&language="+this.apiLanguage);
  }
}
