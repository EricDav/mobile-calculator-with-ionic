import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  contents: [string];
  expression: string;
  answer: string;
  isRepeatInitialView: boolean;

  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    this.answer = '0';
    this.isRepeatInitialView = true;
    this.expression = '';
    this.showBlinkingChar();
    this.contents = ['7', '8', '9', '(', ')', '4', '5', '6', 'x', '/',
    '1', '2', '3', '+', '-', '0', '.', '+/-', 'EXP', '='];
  }

  showBlinkingChar() {
    Observable.interval(1000)
    .takeWhile(() => this.isRepeatInitialView)
    .subscribe(i => { 
      if (this.expression === '' || this.expression === '') {
      this.expression = '|';
    } else if (this.expression === '|') {
        this.expression = ''
      } else {
        this.isRepeatInitialView = false;
    }
    })
  }
}
