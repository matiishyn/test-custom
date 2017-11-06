import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomWebsiteWrapperComponent} from './components/custom-website-wrapper/custom-website-wrapper.component';
import {CustomWebsiteRoutingModule} from "./custom-website.routing";
import {AppService} from "./services/app.service";
import {AngularFireDatabase} from "angularfire2/database";
import {NavigationComponent} from './components/navigation/navigation.component';
import {CanvasComponent} from './components/canvas/canvas.component';
import {FooterComponent} from './components/footer/footer.component';
import {ObjectPropsPipe} from './pipes/object-props.pipe';

@NgModule({
  imports: [
    CommonModule,
    CustomWebsiteRoutingModule
  ],
  declarations: [
    CustomWebsiteWrapperComponent,
    NavigationComponent,
    CanvasComponent,
    FooterComponent,
    ObjectPropsPipe
  ],
  providers: [
    AppService,
    AngularFireDatabase
  ]
})
export class CustomWebsiteModule {
}
