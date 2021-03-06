import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { PAGES_ROUTES } from './pages.routes';

import { ChartsModule } from 'ng2-charts';

import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { IncrementComponent } from '../components/increment/increment.component';
import { GraphDoughnutComponent } from '../components/graph-doughnut/graph-doughnut.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { CompaniesComponent } from './companies/companies.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
        IncrementComponent,
        GraphDoughnutComponent,
        AccountSettingsComponent,
        PromisesComponent,
        RxjsComponent,
        ProfileComponent,
        UsersComponent,
        ModalUploadComponent,
        CompaniesComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
        IncrementComponent,
        GraphDoughnutComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        PipesModule
    ]

})

export class PagesModule { }