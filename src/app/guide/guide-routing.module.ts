import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideLayoutComponent } from './guide-layout/guide-layout.component';
import { GuidePostComponent } from './guide-post/guide-post.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: '',
    component: GuideLayoutComponent,
    children: [
      {
        path: '',
        component: StartComponent,
      },
      {
        path: ':slug',
        component: GuidePostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideRoutingModule {}
