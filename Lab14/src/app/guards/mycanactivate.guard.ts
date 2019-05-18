import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {GetOnlineDataService} from "../service/get-online-data.service";
import {Injectable} from "@angular/core";

@Injectable()
export class MyCanActivateGuard implements CanActivate {
  uuid: any;
  constructor(public getData: GetOnlineDataService, public mainRoute: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.uuid = route.params['uuid'];
    return new Promise<boolean>((res,rej)=> {
      this.getData.isValidId(this.uuid)
        .then(()=>{res(true)})
        .catch(()=>{
          this.mainRoute.navigate(['errors']);
          rej(false);
        })
    });
  }
}
