import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFirestore} from "angularfire2/firestore";
import {CustomWebsiteModule} from "./modules/custom-website/custom-website.module";
import {AppRoutingModule} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    CustomWebsiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
