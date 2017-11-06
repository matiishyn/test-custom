import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomWebsiteWrapperComponent} from './components/custom-website-wrapper/custom-website-wrapper.component';
import {CustomWebsiteRoutingModule} from "./custom-website.routing";
import {AppService} from "./services/app.service";
import {AngularFireDatabase} from "angularfire2/database";

@NgModule({
  imports: [
    CommonModule,
    CustomWebsiteRoutingModule
  ],
  declarations: [CustomWebsiteWrapperComponent],
  providers: [
    AppService,
    AngularFireDatabase
  ]
})
export class CustomWebsiteModule {
}
