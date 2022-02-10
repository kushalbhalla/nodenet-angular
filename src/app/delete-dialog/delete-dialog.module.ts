import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteDialogComponent } from './delete-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ]
})
export class DeleteDialogModule { }
