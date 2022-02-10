import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsComponent } from './friends.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FriendsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ]
})
export class FriendsModule { }
