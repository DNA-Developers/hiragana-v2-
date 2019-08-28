import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: "app-basic-review",
  templateUrl: "./basic-review.page.html",
  styleUrls: ["./basic-review.page.scss"]
})
export class BasicReviewPage implements OnInit {
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
      this.a = this.characters.slice(0,46);
      this.list = [this.a[0]];
      this.loaded = true;
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create(
      {
      header: 'You have finished the basic review.',
      buttons: [{
        text: 'Home',
        icon: 'planet',
        handler: () => {
          this.router.navigate(['home/tabs/basic']);
        }
      }, {
        text: 'Quiz Page',
        icon: 'clipboard',
        handler: () => {
          this.router.navigate(['home/tabs/basic/quiz']);
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
        this.value = this.value + 0.022;
        this.show = String(this.value);
      }
    }
  }
}
