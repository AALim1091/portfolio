import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    imports: [
    RouterModule,     
    NavbarComponent   
  ],
})
export class AppComponent {

}
