import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KyaAdvancedPage } from './kya-advanced.page';

const routes: Routes = [
  {
    path: '',
    component: KyaAdvancedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KyaAdvancedPage]
})
export class KyaAdvancedPageModule {}
