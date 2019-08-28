import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GyaAdvancedPage } from './gya-advanced.page';

const routes: Routes = [
  {
    path: '',
    component: GyaAdvancedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GyaAdvancedPage]
})
export class GyaAdvancedPageModule {}
