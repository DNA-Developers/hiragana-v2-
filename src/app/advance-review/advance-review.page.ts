import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advance-review',
  templateUrl: './advance-review.page.html',
  styleUrls: ['./advance-review.page.scss'],
})
export class AdvanceReviewPage implements OnInit {
  characters;
  counter = 0;
  a = [];
  loaded = false;
  list;
  value = 0;
  incorrect = false;
  show = String(this.value);
  constructor(private getData: DataService, public actionSheetController: ActionSheetController, private router: Router) {}

  ngOnInit() {
    this.getData.getAllData().subscribe(data => {
      this.characters = data;
      this.a = this.characters.slice(46,105);
      this.list = [this.a[0]];
      this.loaded = true;
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create(
      {
      header: 'You have finished the advanced review.',
      buttons: [{
        text: 'Home',
        icon: 'planet',
        handler: () => {
          this.router.navigate(['home/tabs/advanced']);
        }
      }, {
        text: 'Quiz Page',
        icon: 'clipboard',
        handler: () => {
          this.router.navigate(['home/tabs/advanced/quiz']);
        }
      }],
      backdropDismiss: false,
      cssClass: 'my-background my-color',

    });
    await actionSheet.present();
  }


  choose(choice, answer) {
    this.counter++;
    if (this.counter >= this.a.length) {
      if(choice !== answer){
        this.counter--
        this.incorrect = true;
      }
      else{
        this.value = 1;
        this.show = String(this.value);
        this.presentActionSheet();
      }
    } else {
      if(choice !== answer){
        this.counter--
        this.incorrect = true;
      }
      else{
        this.incorrect = false;
        this.list = [this.a[this.counter]];
        this.value = this.value + 0.017;
        this.show = String(this.value);
      }
    }
  }

}
