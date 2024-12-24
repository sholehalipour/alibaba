import { Routes } from '@angular/router';
import { InternalflyComponent } from './+pages/internalfly/internalfly.component';
import { ExternalflyComponent } from './+pages/externalfly/externalfly.component';
import { TrainComponent } from './+pages/train/train.component';
import { BusComponent } from './+pages/bus/bus.component';
import { TourComponent } from './+pages/tour/tour.component';
import { HotelComponent } from './+pages/hotel/hotel.component';
import { VilaComponent } from './+pages/vila/vila.component';

export const routes: Routes = [
    { path: 'internalfly', component: InternalflyComponent },
    { path: 'externalfly', component: ExternalflyComponent },
    { path: 'train', component: TrainComponent },
    { path: 'bus', component: BusComponent },
    { path: 'tour', component: TourComponent },
    { path: 'hotel', component: HotelComponent },
    { path: 'vila', component: VilaComponent },
    { path: '', redirectTo: '/internalfly', pathMatch: 'full' }
];
