import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-trans',
  templateUrl: './credit-trans.component.html',
  styleUrls: ['./credit-trans.component.css']
})
export class CreditTransComponent implements OnInit {
  storedNames1=[];
  credited_amount=[];
  constructor() { }
  credited_data(){
    console.log(this.storedNames1);
  for(let i=0;i<this.storedNames1.length;i++){
   if(this.storedNames1[i].type == "credit"){
     this.credited_amount.push(this.storedNames1[i]);
   }
  }
  }
  ngOnInit(): void {
    this.storedNames1 = JSON.parse(localStorage.getItem("dataSource1"));
    console.log(this.storedNames1)
    this.credited_data();
  }

}
