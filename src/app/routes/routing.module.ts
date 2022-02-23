import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import ROUTESAPP from './routers.app';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTESAPP),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
