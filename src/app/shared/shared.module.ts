import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faFacebookF, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    FontAwesomeModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faFacebookF, faLinkedinIn);
  }
}
