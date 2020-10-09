import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTransactionsComponent } from './all-transactions/all-transactions.component';
import { CreditTransComponent } from './credit-trans/credit-trans.component';
import { DebitTransComponent } from './debit-trans/debit-trans.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ExpComponent } from './exp/exp.component';
import { FirstTabComponent } from './first-tab/first-tab.component';
@NgModule({
  declarations: [
    AppComponent,
    AllTransactionsComponent,
    CreditTransComponent,
    DebitTransComponent,
    ExpComponent,
    FirstTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
