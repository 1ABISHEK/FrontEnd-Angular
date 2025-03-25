import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NamelistComponent } from './namelist/namelist.component';
import { EmplistComponent } from './emplist/emplist.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { PagenotComponent } from './pagenot/pagenot.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'emplist', component: EmplistComponent },
  { path: 'namelist', component: NamelistComponent },
  {path:'empadd',component:EmpaddComponent},
  { path: 'updateemp/:id', component: EmpeditComponent},
  {path:"**",component:PagenotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
