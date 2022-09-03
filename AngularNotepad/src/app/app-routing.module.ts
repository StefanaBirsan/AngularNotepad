import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThoughtsComponent } from './components/thoughts/thoughts.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: 'thoughts',
    component: ThoughtsComponent,
  },
  {
    path: 'thoughts/thoughts/list',
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
