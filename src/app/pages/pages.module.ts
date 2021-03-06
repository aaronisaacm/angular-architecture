import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from "@angular/forms";

import { PAGE_ROUTES } from './pages.routing';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { ChartsOneComponent } from './charts-one/charts-one.component';

// Third Party
import { ChartsModule } from 'ng2-charts';

// Temp
import { IncrementComponent } from '../components/increment/increment.component';
import { DoughnutChartComponent } from '../components/doughnut-chart/doughnut-chart.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesisComponent } from './promesis/promesis.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        ChartsOneComponent,
        IncrementComponent,
        DoughnutChartComponent,
        AccountSettingsComponent,
        PromesisComponent,
        RxjsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        ChartsOneComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        ChartsModule,
        PAGE_ROUTES
    ]
})

export class PagesModule {}