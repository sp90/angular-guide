import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { GuideLayoutComponent } from './guide-layout/guide-layout.component';
import { GuidePostComponent } from './guide-post/guide-post.component';
import { GuideRoutingModule } from './guide-routing.module';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [GuidePostComponent, GuideLayoutComponent, StartComponent],
  imports: [
    CommonModule,
    GuideRoutingModule,
    ScullyLibModule,
    RouterModule,
    MatIconModule,
  ],
})
export class GuideModule {}
