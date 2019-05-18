import {Component, Input, OnInit} from '@angular/core';
import {GetOnlineDataService} from "../../service/get-online-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  uuid: any;
  user: any;
  constructor(public getData: GetOnlineDataService, public route: ActivatedRoute) {
    route.params.subscribe(data => this.uuid = data.uuid);
  }

  ngOnInit() {
    this.getData.getUserById(this.uuid)
      .then(d => {
        this.user = JSON.stringify(d);
      });

  }

}
