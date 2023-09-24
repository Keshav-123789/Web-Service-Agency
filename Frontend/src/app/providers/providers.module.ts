import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersComponent } from './providers.component';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { DeleteProvidersComponent } from './delete-providers/delete-providers.component';
import { DetailsProvidersComponent } from './details-providers/details-providers.component';
import { EditProviersComponent } from './edit-providers/edit-proviers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//import { ProvidersRoutingModule } from './providers';


@NgModule({
  declarations: [ProvidersComponent, AddProvidersComponent, DeleteProvidersComponent, DetailsProvidersComponent, EditProviersComponent],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  exports: [ProvidersComponent, ReactiveFormsModule, AddProvidersComponent, DetailsProvidersComponent, DeleteProvidersComponent, EditProviersComponent]
})
export class ProvidersModule { }
