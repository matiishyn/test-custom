import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'not-found'},
  {path: 'not-found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
