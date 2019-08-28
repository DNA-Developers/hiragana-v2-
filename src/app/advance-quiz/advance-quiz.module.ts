import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdvanceQuizPage } from './advance-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: AdvanceQuizPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdvanceQuizPage]
})
export class AdvanceQuizPageModule {}
