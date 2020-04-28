import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-website';
  links = ['home', 'skills', 'experience', 'education', 'contact'];
  activeLink = this.links[0];
  isSidenavOpened: boolean;
  @ViewChild('sidenav') sidenavDiv;
  @ViewChild('container') containerDiv;

  constructor() {
  }

  openSidenav() {
    if (!this.isSidenavOpened) {
      this.sidenavDiv.nativeElement.style.width = '100%';
      this.isSidenavOpened = true;
    } else {
      this.sidenavDiv.nativeElement.style.width = '';
      this.isSidenavOpened = false;
    }
  }

}
