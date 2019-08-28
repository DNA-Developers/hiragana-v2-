import { Component, OnInit } from "@angular/core";
import { DataService } from '../data.service';

@Component({
  selector: "app-basic-quiz",
  templateUrl: "./basic-quiz.page.html",
  styleUrls: ["./basic-quiz.page.scss"]
})
export class BasicQuizPage implements OnInit {
  characters;
  counter = 0;
  a = [];
  loaded = false;
  list;
  value = 0;
  show = String(this.value);
  constructor(private getData: DataService ) {}

  ngOnInit() {
    this.getData.getAllData().subscribe(data => {
      this.characters = data;
      this.a = this.characters.slice(0, 5);
      this.list = [this.a[0]];
      this.loaded = true;
    });
  }

  choose(choice, answer) {
    this.counter++;
    console.log(this.counter);
    if (this.counter >= this.a.length) {
      console.log(choice);
      console.log(answer);
      console.log(answer === choice);
      this.value = this.value + 0.2;
      this.show = String(this.value);


    } else {
      this.list = [this.a[this.counter]];
      console.log(choice);
      console.log(answer);
      console.log(answer === choice);
      console.log(this.value);
      this.value = this.value + 0.2;
      console.log(this.value);
      this.show = String(this.value);
      console.log(this.show)

    }
  }
}
