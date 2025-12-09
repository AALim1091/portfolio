import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    JsonPipe
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeComponentModule {}