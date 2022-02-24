import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Group {
  data:any,
  loading:boolean
}
@Component({
  selector: 'app-defontana-test',
  templateUrl: './defontana-test.component.html',
  styleUrls: ['./defontana-test.component.scss']
})
export class DefontanaTestComponent implements OnInit, Group {
  data: any;
  loading: boolean=true;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.get()
  }
  get(){
    this.http.get<any>("https://test.defontana.com/")
    .toPromise()
    .then((res)=>{
      this.loading=false
      this.data = res.data
    }).catch((err)=>{
      this.loading=false
      console.log(err)
    })
  }
}
