import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionWorkoutComponent } from '../../shared/components/section-workout/section-workout.component';
import { SectionWorkoutModule } from '../../shared/components/section-workout/section-workout.module';

const routes: Routes = [{ path: '', component: SectionWorkoutComponent }];

@NgModule({
    imports: [SectionWorkoutModule, RouterModule.forChild(routes)],
    declarations: [],
    providers: []
})
export class ComponentsAndDirectivesWorkoutsModule {}