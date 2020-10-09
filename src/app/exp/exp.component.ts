import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  debitss:any;
  Total_amount:any;
amount:any;
reason:any;
array_Trans=[];
amount_entered:any;
reason_entered:any;
account = {
  startingBalace: 100.00,
}
transactions = [
  {
  amount: 100.00,
  description: 'Deposit',
  type: 'credit'
}, {
  amount: 25.26,
  description: 'Olive Garden',
  type: 'debit'
}, {
  amount: 35.15,
  description: 'McPee\'s',
  type: 'debit'
}, {
  amount: 16.25,
  description: 'QT205',
  type: 'debit'
}]


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  transForm = this.fb.group({
    amount: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
  });
  
  debit(){
   if(this.account.startingBalace > this.transForm.controls.amount.value){
    var obj = {
      amount: this.transForm.controls.amount.value,
      description: this.transForm.controls.reason.value,
      type:'debit'
    };
    this.account.startingBalace= this.account.startingBalace-obj.amount;
    this.transactions.push(obj);
 
    let value = this.transactions;
    localStorage.setItem('dataSource', JSON.stringify(value));
   }
else{
  alert("Insufficient Fund");
}

  }
  credit(){
    var obj = {
      amount: this.transForm.controls.amount.value,
      description: this.transForm.controls.reason.value,
      type:'credit'
    };
    this.account.startingBalace= this.account.startingBalace+parseInt(obj.amount);
console.log(this.account.startingBalace);
this.transactions.push(obj);
let value1 = this.transactions;
localStorage.setItem('dataSource1', JSON.stringify(value1));
  }
}
