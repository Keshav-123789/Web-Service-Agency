import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddProvidersComponent } from './providers/add-providers/add-providers.component';
import { DeleteProvidersComponent } from './providers/delete-providers/delete-providers.component';
import { DetailsProvidersComponent } from './providers/details-providers/details-providers.component';
import { EditProviersComponent } from './providers/edit-providers/edit-proviers.component';
import { ProvidersComponent } from './providers/providers.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "providers", component: ProvidersComponent },
  { path: "providers/add-provider", component: AddProvidersComponent },
  { path: "providers/edit/:id", component: EditProviersComponent },
  { path: "providers/delete/:id", component: DeleteProvidersComponent },
  { path: "providers/details/:id", component: DetailsProvidersComponent },
  { path: "**", component: NotfoundComponent },
 // {
    //   path: "myModal414532",
    //   component: EditProviersComponent
    // }

];
let n: number = 1;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
