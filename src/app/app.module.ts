import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { HomeComponent } from './home/home.component';
import { EmplistComponent } from './emplist/emplist.component';
import { NamelistComponent } from './namelist/namelist.component';
import {HttpClientModule} from '@angular/common/http';
import { EmpService } from './emp.service';
import { FormsModule } from '@angular/forms';
import { EmpeditComponent } from './empedit/empedit.component';
import { PagenotComponent } from './pagenot/pagenot.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    EmpaddComponent,
    HomeComponent,
    EmplistComponent,
    NamelistComponent,
    EmpeditComponent,
    PagenotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
