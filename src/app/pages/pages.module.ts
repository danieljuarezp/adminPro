import { NgModule } from "@angular/core";

import { PAGES_ROUTES } from "./pages.routes";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graph1Component,
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]

})

export class PagesModule { }