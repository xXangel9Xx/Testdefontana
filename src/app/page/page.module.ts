import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefontanaTestComponent } from './defontana-test/defontana-test.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    DefontanaTestComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    DefontanaTestComponent
  ]
})
export class PageModule { }
