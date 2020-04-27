import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatButtonModule,
        MatTabsModule,
        FlexLayoutModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
