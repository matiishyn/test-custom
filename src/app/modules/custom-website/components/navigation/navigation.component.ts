import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {App} from "../../models/app";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnChanges {
  @Input() app: App;

  constructor() {
  }

  ngOnInit() {
    console.log(this.app);
  }

  ngOnChanges() {
    console.log(this.app);
  }

}
