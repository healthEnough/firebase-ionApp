import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service'

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: '',loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule), canActivate: [AuthService]},
  { path: 'login',loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'register',loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }