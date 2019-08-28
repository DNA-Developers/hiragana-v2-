import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'
import { AdMob } from '@admob-plus/ionic';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  results;
  constructor(private getResults: DataService, private admob: AdMob, public platform: Platform, private router: Router) {
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
    this.results = this.getResults.getResults();
    if(this.results[0]['count'] === 0){
      this.router.navigate(['home/tabs/basic']);
    }
  }

}
