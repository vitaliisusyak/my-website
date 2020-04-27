import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SkillsComponent} from './pages/skills/skills.component';
import {ExperienceComponent} from './pages/experience/experience.component';
import {EducationComponent} from './pages/education/education.component';
import {ContactComponent} from './pages/contact/contact.component';
import {HomeComponent} from './pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
