import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefontanaTestComponent } from './defontana-test/defontana-test.component';



@NgModule({
  declarations: [
    DefontanaTestComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    DefontanaTestComponent
  ]
})
export class PageModule { }
