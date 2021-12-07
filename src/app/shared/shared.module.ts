import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactPageComponent } from './components/contactpage/contactpage.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { ClientdashboardComponent } from './components/clientdashboard/clientdashboard.component';
import { BillsComponent } from './components/bills/bills.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { TransferformComponent } from './components/transferform/transferform.component';
import { BillhistoryComponent } from './components/billhistory/billhistory.component';
import { BillTransationDetailsComponent } from './components/billtransationdetails/billtransationdetails.component';






@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    NewsDetailsComponent,
    ClientdashboardComponent,
    BillsComponent,
    TransferformComponent,
    BillhistoryComponent,
    BillTransationDetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'db', component: ClientdashboardComponent, canActivate:[AuthGuard]},
      {path: 'transferform', component: TransferformComponent, canActivate:[AuthGuard]},   
      {path: 'bills/:id', component: BillhistoryComponent, canActivate:[AuthGuard]},   
      {path: 'bills', component: BillsComponent, canActivate:[AuthGuard]},
      {path: 'transactiondetail/:id', component: BillTransationDetailsComponent, canActivate:[AuthGuard]},
      {path: 'contact', component: ContactPageComponent},
      {path: 'news/:id', component: NewsDetailsComponent}, 
    ])
  ],
  providers:[
    
    AuthGuard,
    AuthService
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
