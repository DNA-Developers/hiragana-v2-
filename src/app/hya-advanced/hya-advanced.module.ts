import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HyaAdvancedPage } from './hya-advanced.page';

const routes: Routes = [
  {
    path: '',
    component: HyaAdvancedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HyaAdvancedPage]
})
export class HyaAdvancedPageModule {}
