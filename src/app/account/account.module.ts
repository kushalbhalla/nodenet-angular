import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AccountComponent,
    UserComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: []
})
export class AccountModule { }
