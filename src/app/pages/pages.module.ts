import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { PAGES_ROUTES } from './pages.routes';

import { ChartsModule } from 'ng2-charts';

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
        RxjsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
        IncrementComponent,
        GraphDoughnutComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]

})

export class PagesModule { }