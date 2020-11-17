import { NgModule } from '@angular/core';
import {  RouterModule, Route } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SectionHomeComponent } from '../../shared/components/section-home/section-home.component';
import { SectionHomeModule } from '../../shared/components/section-home/section-home.module';
import { SectionHomeData } from '../../shared/models/section.home.data';

const routes: Array<Route & { data : SectionHomeData}>= [
    { 
    path: '', 
    component: SectionHomeComponent,
    data:  {
        sectionTitle: 'Components & Directives Challenges',
        sectionDescription: 'Here we will do some challenges regarding Angular s Components and Directives...',
        sectionName: environment.navRoutes.components.sectionName
    }
  }
];

@NgModule({
    imports: [SectionHomeModule, RouterModule.forChild(routes)],
    declarations: [],
    providers: []
})
export class ComponentsAndDirectivesHomeModule {}