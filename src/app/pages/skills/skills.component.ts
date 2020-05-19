import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('htmlBar', [
      state('initial', style({
        width: 0
      })),
      state('full', style({
        width: '90%'
      })),
      transition('initial => full', [
        animate(2000)
      ])
    ]),
    trigger('cssBar', [
      state('initial', style({
        width: 0
      })),
      state('full', style({
        width: '78%'
      })),
      transition('initial => full', [
        animate(2000)
      ])
    ]),
    trigger('jsBar', [
      state('initial', style({
        width: 0
      })),
      state('full', style({
        width: '90%'
      })),
      transition('initial => full', [
        animate(2000)
      ])
    ])
  ]
})

export class SkillsComponent implements OnInit {
   htmlState = 'initial';
   cssState = 'initial';
   jsState = 'initial';

  constructor() { }

  ngOnInit() {
    if (this.htmlState === 'initial') {
      setTimeout(() => {
        this.htmlState = 'full';
        this.cssState = 'full';
        this.jsState = 'full';
      }, 0);
    }
  }
}
