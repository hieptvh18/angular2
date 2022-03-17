import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {'path':'home',component:HomeComponent},
  {'path':'user',component:UsersComponent},
  {'path':'user-detail/:id',component:UserDetailComponent},
  {'path':'product',component:ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
