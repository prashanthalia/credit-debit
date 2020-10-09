import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Routes, RouterModule,ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent implements OnInit {
Total_amount:any;
amount:any;
reason:any;
all:boolean= true;
array_Trans=[];
amount_entered:any;
reason_entered:any;
@Output() emitData= new EventEmitter();
account = {
  startingBalace: 100.00,
}
transactions = [
  {
  amount: 100.00,
  description: 'Interest Recieved',
  date: '07Aug2019',
  type: 'credit'
}, {
  amount: 25.26,
  description: 'Spent for Dinner',
  date: '01Aug2019',
  type: 'debit'
}, {
  amount: 35.15,
  description: 'Spent for shopping',
  date: '07Jun2019',
  type: 'debit'
}, {
  amount: 16.25,
  description: 'Spent for Clothes ',
  date: '07Aug2020',
  type: 'debit'
}]
  title: any;


  constructor(private fb:FormBuilder,public route:ActivatedRoute,private router: Router) {
    let a= this.route.snapshot.paramMap;
    
    localStorage.setItem('account', JSON.stringify(this.account));

    console.log("routes"+a);
   }
   routerChangeMethod(url){
    this.title = url;
  //   if(this.title == '/all_trans/debit'){
  //     this.all= false;
     
  //   }
  //  else if(this.title == '/all_trans/credit'){
  //     this.all= false;
  //   }
  //   else if(this.title == '/all_trans/all_trans'){
  //     this.all= true;
  //   }
  }
  ngOnInit(): void {

    this.router.events.subscribe(event =>{
      if (event instanceof NavigationStart){
            console.log(event.url)
            this.routerChangeMethod(event.url);
          }
          })
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
      date: '16Sep2020',
      type:'debit'
    };
    this.account.startingBalace= this.account.startingBalace-obj.amount;
    this.transactions.push(obj);
    this.emitData.emit(this.transactions);
    let value = this.transactions;

    localStorage.setItem('account', JSON.stringify(this.account));
    localStorage.setItem('dataSource', JSON.stringify(value));
   }


  }
 
  credit(){
    var obj = {
      amount: this.transForm.controls.amount.value,
      description: this.transForm.controls.reason.value,
      date: '16Sep2020',
      type:'credit'
    };
    this.account.startingBalace= this.account.startingBalace+parseInt(obj.amount);
console.log(this.account.startingBalace);
this.transactions.push(obj);
let value1 = this.transactions;
localStorage.setItem('account', JSON.stringify(this.account));
localStorage.setItem('dataSource1', JSON.stringify(value1));
  }
}
