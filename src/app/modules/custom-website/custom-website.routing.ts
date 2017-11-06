import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomWebsiteWrapperComponent} from "./components/custom-website-wrapper/custom-website-wrapper.component";

const routes: Routes = [
  {path: ':accessCode', component: CustomWebsiteWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomWebsiteRoutingModule {
}
