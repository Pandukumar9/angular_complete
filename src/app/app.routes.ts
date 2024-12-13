import { Routes } from '@angular/router';
import { AddMobileComponent } from './features/mobiles/add-mobile/add-mobile.component';
import { MobileListComponent } from './features/mobiles/mobile-list/mobile-list.component';
import { NgselectComponent } from './features/ngselect/ngselect/ngselect.component';
import { FormlyTestComponent } from './features/ngselect/formly-test/formly-test.component';
import { CropImgComponent } from './features/imgcrop/crop-img/crop-img.component';
import { MatLibraryComponent } from './features/material/mat-library/mat-library.component';

export const routes: Routes = [
  { path: '', redirectTo: 'mobile', pathMatch: 'full' },
  {path:'mobile' , component:AddMobileComponent},
  {path:'mobile-list' , component:MobileListComponent},
  {path:'ngselect' , component: NgselectComponent},
  {path:'formtest' , component: FormlyTestComponent},
  {path:'imgcrop' , component: CropImgComponent},
  {path:'matlib' , component: MatLibraryComponent},
];
