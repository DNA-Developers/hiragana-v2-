import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdvanceStudyPage } from './advance-study.page';

const routes: Routes = [
  {
    path: '',
    component: AdvanceStudyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdvanceStudyPage]
})
export class AdvanceStudyPageModule {}
