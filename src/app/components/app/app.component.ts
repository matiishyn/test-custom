import {Component} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: Observable<any[]>;

  constructor() {
    // this.items = db.collection('v4').valueChanges();
    // console.log(this.items);
  }
}
