import { Routes, RouterModule } from "@angular/router";


import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graph1Component } from "./graph1/graph1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromisesComponent } from "./promises/promises.component";
import { RxjsComponent } from "./rxjs/rxjs.component";
import { LoginGuardGuard } from "../services/service.index";
import { ProfileComponent } from './profile/profile.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { title: 'Progress Bar' } },
            { path: 'graph', component: Graph1Component , data: { title: 'Graficas' }},
            { path: 'promises', component: PromisesComponent , data: { title: 'Promesas' }},
            { path: 'rxjs', component: RxjsComponent , data: { title: 'RxJs' }},
            { path: 'profile', component: ProfileComponent , data: { title: 'Perfil' }},
            { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Configuracion' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);