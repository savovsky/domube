import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'clases', pathMatch: 'full' },
  {
    path: 'classes',
    children: [
      {
        path: '',
        loadChildren: './clases/components/clases/clases.module#ClasesPageModule'
      },
      {
        path: ':clasId',
        loadChildren: './clases/components/clas-detail/clas-detail.module#ClasDetailPageModule'
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
