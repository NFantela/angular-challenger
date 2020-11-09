import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionHomeModule } from '../../shared/components/section-home.module';

const routes: Routes = [{ path: '', component: SectionHomeModule }];

@NgModule({
    imports: [SectionHomeModule, RouterModule.forChild(routes)],
    declarations: [],
    providers: []
})
export class ComponentsAndDirectivesHomeModule {}