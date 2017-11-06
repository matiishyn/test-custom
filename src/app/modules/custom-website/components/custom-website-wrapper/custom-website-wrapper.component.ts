import {Component, OnInit} from '@angular/core';
import {AppService} from "../../services/app.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {App} from "../../models/app";

@Component({
  selector: 'custom-website-wrapper',
  templateUrl: './custom-website-wrapper.component.html',
  styleUrls: ['./custom-website-wrapper.component.css']
})
export class CustomWebsiteWrapperComponent implements OnInit {
  app$: Observable<any>;
  app: App;

  constructor(public appService: AppService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const accessCode = this.route.snapshot.params['accessCode'];
    console.log(accessCode);
    this.app$ = this.appService.getAppByAccessCode(accessCode).valueChanges();
    this.app$.subscribe(app => {
      this.app = app;
    });
  }

}
