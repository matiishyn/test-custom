import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomWebsiteWrapperComponent} from './components/custom-website-wrapper/custom-website-wrapper.component';
import {CustomWebsiteRoutingModule} from "./custom-website.routing";

@NgModule({
  imports: [
    CommonModule,
    CustomWebsiteRoutingModule
  ],
  declarations: [CustomWebsiteWrapperComponent]
})
export class CustomWebsiteModule {
}
