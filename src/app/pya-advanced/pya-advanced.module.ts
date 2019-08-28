import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PyaAdvancedPage } from './pya-advanced.page';

const routes: Routes = [
  {
    path: '',
    component: PyaAdvancedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PyaAdvancedPage]
})
export class PyaAdvancedPageModule {}
