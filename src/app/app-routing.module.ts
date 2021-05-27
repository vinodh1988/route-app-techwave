import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/home/details/details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
   {path:"",component: HomeComponent},
   {path:"home/:id",component: DetailsComponent},
   {path:"about",component: AboutComponent},
   {path:"contact",component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
