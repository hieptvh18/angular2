import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/user/users.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { ProductComponent } from './components/products/product/product.component';

// connect api
import {HttpClientModule} from '@angular/common/http';

// import module form 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { StudentComponent } from './components/students/student/student.component';
import { StudentDetailComponent } from './components/students/student-detail/student-detail.component';
import { StudentFormComponent } from './components/students/student-form/student-form.component';
// service
import { StudentService } from './services/student.service';
import { AsideComponent } from './layouts/aside/aside.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';
import { PostFormComponent } from './components/posts/post-form/post-form.component';
import { ShowErrorComponent } from './components/component/show-error/show-error.component';
import { StatusBtnComponent } from './components/component/status-btn/status-btn.component';

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
    StudentFormComponent,
    AsideComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent,
    PostDetailComponent,
    PostFormComponent,
    ShowErrorComponent,
    StatusBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,// dua vao de cac component con su dung duoc,
    HttpClientModule, //https,
    ReactiveFormsModule//form reactive
  ],
  // noi cung cap bl bla (api)
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
