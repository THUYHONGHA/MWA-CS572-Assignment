import {Component, OnInit} from '@angular/core';
import {GetOnlineDataService} from "../../service/get-online-data.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers: any[] = [];

  constructor(public getData: GetOnlineDataService) {
  }

  ngOnInit() {
    console.log('User Comp');
    this.getData.getCachedData()
      .then((data: any) => {
        let users = data.results;
        console.log((users));
        if (users != null) {
          users.forEach(user => {
            console.log('inside forEach');
            let result = {
              'uuid': user.login.uuid,
              'username': user.name.first + user.name.last,
              'email': user.email
            }
            this.listUsers.push(result);
          })
        }
      })
      .catch(err => console.log(err));

  }

}
