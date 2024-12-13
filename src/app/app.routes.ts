import { Routes } from '@angular/router';
import { AddMobileComponent } from './features/mobiles/add-mobile/add-mobile.component';
import { MobileListComponent } from './features/mobiles/mobile-list/mobile-list.component';
import { NgselectComponent } from './features/ngselect/ngselect/ngselect.component';

export const routes: Routes = [
  { path: '', redirectTo: 'mobile', pathMatch: 'full' },
  {path:'mobile' , component:AddMobileComponent},
  {path:'mobile-list' , component:MobileListComponent},
  {path:'ngselect' , component: NgselectComponent},
];
