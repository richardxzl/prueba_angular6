import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasListComponent } from './notas-list/notas-list.component';
import { NotasCreateComponent } from './notas-create/notas-create.component';
import { NotasUpdateComponent } from './notas-update/notas-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'notas', pathMatch: 'full' },
  {
    path:  'notas',
    component:  NotasListComponent
  },
  {
    path: 'create-nota',
    component: NotasCreateComponent      
  },
  {
    path: 'update-nota',
    component: NotasUpdateComponent      
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }