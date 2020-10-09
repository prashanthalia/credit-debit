import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.css']
})
export class FirstTabComponent implements OnInit {

 
  public creditTransactions = JSON.parse(localStorage.getItem('dataSource1'));
  public debitTransactions = JSON.parse(localStorage.getItem('dataSource'));
  public account = JSON.parse(localStorage.getItem('account'));
  constructor() { 
    // console.log('transactions', this.transactions);
    console.log('accounts', this.account);
  }

  ngOnInit() {
  }

}
