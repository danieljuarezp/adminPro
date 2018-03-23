import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graph1Component } from './pages/graph1/graph1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
{
    path: '',
    component: PagesComponent,
    children: [
{path: 'dashboard', component: DashboardComponent},
{path: 'progress', component: ProgressComponent},
{path: 'graph', component: Graph1Component},
{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
]
},

{path: 'login', component: LoginComponent, data: { title: 'Ingresar' }},
{path: 'register', component: RegisterComponent, data: { title: 'Registrarse' }},
{path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true} );