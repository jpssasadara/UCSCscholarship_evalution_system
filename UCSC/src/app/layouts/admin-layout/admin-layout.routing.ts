import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CrieteriaComponent } from '../../crieteria/crieteria.component';
import { from } from 'rxjs';
import { IfsAdminComponent } from 'src/app/ifs-admin/ifs-admin.component';
import { ClistComponent } from 'src/app/clist/clist.component';
import { CtableComponent } from '../../ctable/ctable.component';
import { EllistComponent } from '../../ellist/ellist.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path:'ifs/criteria', component:CrieteriaComponent},
    { path:'ifs/list', component:IfsAdminComponent},
    { path:'ifs/clist', component:ClistComponent},
    { path: 'ifs/ctable', component:CtableComponent},
    { path: 'ifs/slist', component:EllistComponent},
];
