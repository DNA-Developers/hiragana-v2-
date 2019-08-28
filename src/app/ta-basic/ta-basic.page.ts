import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AdMob } from '@admob-plus/ionic';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-ta-basic',
  templateUrl: './ta-basic.page.html',
  styleUrls: ['./ta-basic.page.scss'],
})
export class TaBasicPage implements OnInit {
  front = false;
  snd;
  characters;
  counter = 0;
  a = [];
  loaded = false;
  list;
  constructor(private getData: DataService, private admob: AdMob, public platform: Platform) {
    platform.ready().then(() => {
      admob.setDevMode(false);
   });
  }
 ionViewWillEnter() {
  this.showAd();
}

ionViewWillLeave() {
  this.hide();
}
  showAd() {
   this.admob.banner.show({ id: 'ca-app-pub-3554266293416461/2685380698'});
  }
  hide() {
    this.admob.banner.hide( 'ca-app-pub-3554266293416461/2685380698');
  }

  ngOnInit() {
    this.getData.getAllData().subscribe(data => {
      this.characters = data;
      this.a = this.characters.slice(15, 20);
      this.list = [this.a[0]];
      this.loaded = true;
    });
  }
  flip() {
    this.front = !this.front;
  }
  playSound(){
    this.front = null;
    this.snd = new Audio(`../../assets/${this.list[0]['romanji']}(hiragana).mp3`)
    this.snd.play()
  }

  next(){
      this.counter++;
      this.list = [this.a[this.counter]];
  }
  back(){
      this.counter--;
      this.list = [this.a[this.counter]];
  }


}
