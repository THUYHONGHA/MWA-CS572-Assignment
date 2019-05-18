import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {promise} from "selenium-webdriver";

@Injectable({
  providedIn: 'root'
})
export class GetOnlineDataService {

  constructor(public http: HttpClient) {
  }

  getOnlineData() {
    let url = "https://randomuser.me/api/?results=10";
    return new Promise(resolve => {
      this.http.get(url)
        .subscribe(d => {
          localStorage.setItem('dataSource', JSON.stringify(d));
        });
    });
  }

  getCachedData() {
    return new Promise((res, rej) => {
      let data = localStorage.getItem('dataSource');
      res(JSON.parse(data));
    });
  }

  getUserById(uuid) {
    return new Promise((res, rej) => {
      this.getCachedData().then((d: any) => {
        console.log('d ' + d);
        let users = d.results;
        if (users) {
          let user = users.filter(u => u.login.uuid == uuid);
          if (user) {
            res(user[0]);
          } else {
            rej('No data in filter');
          }
        } else {
          rej('No data in ');
        }
      });
    });
  }

  isValidId(uuid) {
    return new Promise<boolean>((res, rej) => {
      this.getCachedData().then((d: any) => {
        let users = d.results;
        if (users) {
          let user = users.filter(u => u.login.uuid == uuid);
          if (user) {
            res(true);
          }
        }
        rej(false);
      });
    });
  }
}
