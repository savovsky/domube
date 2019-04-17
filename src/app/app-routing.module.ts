import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'classes', pathMatch: 'full' },
  {
    path: 'classes',
    children: [
      {
        path: '',
        loadChildren: './classes/components/classes/classes.module#ClassesPageModule'
      },
      {
        path: ':classId',
        loadChildren: './classes/components/class-detail/class-detail.module#ClassDetailPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
