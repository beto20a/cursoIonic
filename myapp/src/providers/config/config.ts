import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
let config_key_name = "config";

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {
  constructor(public http: HttpClient) {
    console.log("Hello ConfigProvider Provider");
  }

  getConfigData(): any {
   return localStorage.getItem(config_key_name);
  }
  setConfigData(showSlide?: boolean, name?: string, username?: string): void {
    let config = {
      showSlide: false,
      name: "",
      username: ""
    };
    if (showSlide) {
      config.showSlide = showSlide;
    }
    if (name) {
      config.name = name;
    }
    if (username) {
      config.username = username;
    }
    localStorage.setItem(config_key_name,JSON.stringify(config));
  }
}
