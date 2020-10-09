import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AllTransactionsComponent } from '../all-transactions/all-transactions.component';

@Component({
  selector: 'app-debit-trans',
  templateUrl: './debit-trans.component.html',
  styleUrls: ['./debit-trans.component.css']
})
export class DebitTransComponent implements OnInit {
@Input() debitsss ;
debited_amount=[];
storedNames=[];
@ViewChild(AllTransactionsComponent) dbts:AllTransactionsComponent;
  constructor() { }
  
// ff(){
//   console.log(this.dbts);
// }
debited_data(){
  console.log(this.storedNames);
  for(let i=0;i<this.storedNames.length;i++){
   if(this.storedNames[i].type == "debit"){
     this.debited_amount.push(this.storedNames[i]);
   }
  }
}
  ngOnInit(): void {
    this.storedNames = JSON.parse(localStorage.getItem("dataSource"));
    console.log(this.storedNames)
    this.debited_data();
  //  this.ff();
  }

}
