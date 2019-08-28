import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ZaAdvancedPage } from './za-advanced.page';

const routes: Routes = [
  {
    path: '',
    component: ZaAdvancedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ZaAdvancedPage]
})
export class ZaAdvancedPageModule {}
