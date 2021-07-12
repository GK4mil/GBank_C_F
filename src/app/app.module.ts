import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactpageComponent } from './shared/components/contactpage/contactpage.component';
import { NewsBoardComponent } from './shared/components/news-board/news-board.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    NewsBoardComponent,
    NotFoundComponent,
    ContactpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SharedModule,
    RouterModule.forRoot([
      {path: '', component: NewsBoardComponent},
      {path: 'contact', component: ContactpageComponent}
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
