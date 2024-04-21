import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CaffeComponent } from './pages/caffe/caffe.component';
import { MachineComponent } from './pages/machine/machine.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    title: 'welcome',
    component: MainComponent,
    data: {
      animation: 'mainPage',
      description: 'welcome',
    },
  },
  {
    path: 'caffe',
    title: 'caffe',
    component: CaffeComponent,
    data: {
      animation: 'caffePage',
      description: 'caffe',
    },
  },
  {
    path: 'machine',
    title: 'machine',
    component: MachineComponent,
    data: {
      animation: 'machinePage',
      description: 'machine',
    },
  },
  {
    path: 'maintenance',
    title: 'maintenance',
    component: MaintenanceComponent,
    data: {
      animation: 'maintenancePage',
      description: 'maintenance',
    },
  },
  {
    path: '404',
    component: NotFoundComponent,
    data: { animation: 'notFoundPage' },
  },
  { path: '**', redirectTo: '404' },
];
