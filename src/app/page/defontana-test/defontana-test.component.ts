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
      alert("Get Realizado con exito a la pagina https://test.defontana.com/")
    }).catch((err)=>{
      alert("Ocurrio un error por favor revise su conexion a internet")
      this.loading=false
      console.log(err)
    })
  }
}
