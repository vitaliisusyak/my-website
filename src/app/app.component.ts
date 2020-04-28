import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-website';
  links = ['home', 'skills', 'experience', 'education', 'contact'];
  activeLink = this.links[0];

  constructor() {
  }

}
