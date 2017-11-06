import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {CustomWebsiteModule} from "./modules/custom-website/custom-website.module";
import {AppRoutingModule} from "./app.routing";
import {NotFoundComponent} from "./components/not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
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
