import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectPictureComponent } from './components/select-picture/select-picture.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';


const routes: Routes = [
  { path: '', component: SelectPictureComponent },
  { path: 'createAccount', component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
