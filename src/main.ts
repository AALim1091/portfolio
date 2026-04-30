import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { ProjectsComponent } from './app/pages/projects/projects.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { AboutMeComponent } from './app/pages/about-me/about-me.component';
import Aura from '@primeuix/themes/aura';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.app-dark'
        }
      }
    })
  ]
})
.catch(err => console.error(err));
