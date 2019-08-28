import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NyaAdvancedPage } from './nya-advanced.page';

const routes: Routes = [
  {
    path: '',
    component: NyaAdvancedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NyaAdvancedPage]
})
export class NyaAdvancedPageModule {}
