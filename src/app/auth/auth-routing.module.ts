import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPage } from './auth.page';

const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        children: [
            {
                path: 'signin',
                children: [
                    {
                        path: '',
                        loadChildren: './signin/signin.module#SigninPageModule'
                    }
                ]
            },
            {
                path: 'signup',
                children: [
                    {
                        path: '',
                        loadChildren: './signup/signup.module#SignupPageModule'
                    }
                ]
            },
            { path: '', redirectTo: '/auth/signin', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: '/auth/signin', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
