import { Component, OnInit } from '@angular/core';
import { AdMob } from '@admob-plus/ionic';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-hiragana-chart',
  templateUrl: './hiragana-chart.page.html',
  styleUrls: ['./hiragana-chart.page.scss'],
})
export class HiraganaChartPage implements OnInit {

  constructor(private admob: AdMob, public platform: Platform) {
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
  }

}
