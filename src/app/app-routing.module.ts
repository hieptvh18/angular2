import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StudentComponent } from './components/student/student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostFormComponent } from './components/posts/post-form/post-form.component';
import { PostDetailComponent } from './components/posts/post-detail/post-detail.component';

const routes: Routes = [
  // define routing
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UsersComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'students', component: StudentComponent },
  { path: 'student/form', component: StudentFormComponent },
  { path: 'student/form/:id', component: StudentFormComponent },
  { path: 'student-detail/:id', component: StudentDetailComponent },
  { path: 'posts', component: PostComponent },
  {
    path: 'posts/form',
    component: PostFormComponent,
  },
  {
    path: 'posts/post-detail/:id',
    component: PostDetailComponent,
  },
];

@NgModule({
  // forROot nhan vao 1 mang route =>
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
