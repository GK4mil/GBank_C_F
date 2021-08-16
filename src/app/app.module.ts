import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsBoardComponent } from './shared/components/news-board/news-board.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { ClientdashboardComponent } from './shared/components/clientdashboard/clientdashboard.component';
import { AuthGuard } from './shared/services/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    NewsBoardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SharedModule,
    RouterModule.forRoot([
      {path: '', component: NewsBoardComponent},
     {path: 'db', component: ClientdashboardComponent, canActivate:[AuthGuard]}
     
    ])
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
