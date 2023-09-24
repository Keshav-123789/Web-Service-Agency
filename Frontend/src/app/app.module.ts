import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { UserModule } from './user/user.module';
import { ProvidersComponent } from './providers/providers.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AddProvidersComponent } from './providers/add-providers/add-providers.component';
import { DeleteProvidersComponent } from './providers/delete-providers/delete-providers.component';
import { DetailsProvidersComponent } from './providers/details-providers/details-providers.component';
import { EditProviersComponent } from './providers/edit-providers/edit-proviers.component';


@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent,
    NavComponent,
    FooterComponent,
    AddProvidersComponent,
    DeleteProvidersComponent,
    DetailsProvidersComponent,
    EditProviersComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AboutModule,
    UserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
