import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactPageComponent } from './components/contactpage/contactpage.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { ClientdashboardComponent } from './components/clientdashboard/clientdashboard.component';




@NgModule({
  declarations: [
    NavbarComponent,
    LoginComponent,
    NewsDetailsComponent,
    ClientdashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'contact', component: ContactPageComponent},
      {path: 'news/:id', component: NewsDetailsComponent}
    ])
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
