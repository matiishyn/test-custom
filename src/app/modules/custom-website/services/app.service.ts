import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";

@Injectable()
export class AppService {
  app: AngularFireList<any[]>;

  constructor(public fb: AngularFireDatabase) {
  }

  getAppByAccessCode(ac) {
    this.app = this.fb.list(
      '/v4/app',
      ref => ref
        .orderByChild('accessCode')
        .equalTo(ac)
    );

    return this.app;
  }

}
