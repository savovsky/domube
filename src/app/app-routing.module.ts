import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'properties', loadChildren: './properties/properties.module#PropertiesPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  // { path: 'signin', loadChildren: './auth/signin/signin.module#SigninPageModule' },
  // { path: 'signup', loadChildren: './auth/signup/signup.module#SignupPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
