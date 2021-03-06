import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bya-quiz',
  templateUrl: './bya-quiz.page.html',
  styleUrls: ['./bya-quiz.page.scss'],
})
export class ByaQuizPage implements OnInit {

  characters;
  counter = 0;
  a = [];
  loaded = false;
  list;
  value = 0;
  results = {
    correct: 0,
    incorrect: 0,
    incorrectRo: [],
    incorrectHiragana: [],
    count: 0
  }
  show = String(this.value);
  constructor(private getData: DataService, private router: Router ) {}

  ngOnInit() {
    this.getData.getAllData().subscribe(data => {
      this.characters = data;
      this.a = this.characters.slice(83, 86);
      this.list = [this.a[0]];
      this.loaded = true;
    });
  }

  choose(choice, answer, hiragana) {
    this.counter++;
    if (this.counter >= this.a.length) {
      this.results['count']++
      if(choice === answer){
        this.results['correct']++;
      }
      else{
        this.results['incorrect']++;
        this.results['incorrectRo'].push(answer);
        this.results['incorrectHiragana'].push(hiragana);
    
      }
      this.value = 1;
      this.show = String(this.value);
      if(this.counter >= 2){
        setTimeout(() => {
          this.getData.getAdvancedResults().pop();
          this.getData.getAdvancedResults().push(this.results);
          // console.log(this.getData.getAdvancedResults());
          this.router.navigate(['/home/tabs/advanced/result'])
        }, 150);
      }


    } else {
      this.list = [this.a[this.counter]];
      this.value = this.value + 0.33;
      this.show = String(this.value);
      if(choice === answer){
        this.results['correct']++;
      }
      else{
        this.results['incorrect']++;
        this.results['incorrectRo'].push(answer);
        this.results['incorrectHiragana'].push(hiragana);
      }
      this.results['count']++
    }
  }




}
