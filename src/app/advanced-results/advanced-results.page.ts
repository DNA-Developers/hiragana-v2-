import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AdMob } from '@admob-plus/ionic';

@Component({
  selector: 'app-advanced-results',
  templateUrl: './advanced-results.page.html',
  styleUrls: ['./advanced-results.page.scss'],
})
export class AdvancedResultsPage implements OnInit {

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
    this.results = this.getResults.getAdvancedResults();
    if(this.results[0]['count'] === 0){
      this.router.navigate(['home/tabs/advanced']);
    }
  }

}
