import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ProductComponent } from './components/product/product.component';

// connect api
import {HttpClientModule} from '@angular/common/http';

// import module form 
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StudentComponent } from './components/student/student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
// service
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserDetailComponent,
    ProductComponent,
    ProductDetailComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,// dua vao de cac component con su dung duoc,
    HttpClientModule //https
  ],
  // noi cung cap bl bla (api)
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
