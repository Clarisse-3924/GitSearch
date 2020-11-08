import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { FormsModule } from '@angular/forms';
import { RequestService} from './request.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Upper } from './upper.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RepositoriesComponent,
    FormComponent,
    UserComponent,
    Upper
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    HttpClientModule,
  

  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }