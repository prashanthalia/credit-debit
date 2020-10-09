import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { CreditTransComponent } from './credit-trans/credit-trans.component';
import { DebitTransComponent } from './debit-trans/debit-trans.component';
import { FirstTabComponent } from './first-tab/first-tab.component';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'all_trans'
  },
  {
path:'all_trans',component:AllTransactionsComponent,


  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
