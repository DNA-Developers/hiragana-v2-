import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RyaAdvancedPage } from './rya-advanced.page';

const routes: Routes = [
  {
    path: '',
    component: RyaAdvancedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RyaAdvancedPage]
})
export class RyaAdvancedPageModule {}
