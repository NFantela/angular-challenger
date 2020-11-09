import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionHomeComponent } from '../../shared/components/section-home/section-home.component';
import { SectionHomeModule } from '../../shared/components/section-home/section-home.module';

const routes: Routes = [{ path: '', component: SectionHomeComponent }];

@NgModule({
    imports: [SectionHomeModule, RouterModule.forChild(routes)],
    declarations: [],
    providers: []
})
export class ComponentsAndDirectivesHomeModule {}