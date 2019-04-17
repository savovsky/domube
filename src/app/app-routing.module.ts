import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'classes', pathMatch: 'full' },
  {
    path: 'classes',
    loadChildren: './classes/classes.module#ClassesPageModule'
  },
  { path: 'class-detail', loadChildren: './classes/class-detail/class-detail.module#ClassDetailPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
