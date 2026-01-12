import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ContactComponent } from './app/pages/contact/contact.component';
import { HomeComponent } from './app/pages/home/home.component';
import { ProjectsComponent } from './app/pages/projects/projects.component';


const routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
})
.catch(err => console.error(err));
