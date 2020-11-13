import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SectionWorkoutComponent } from '../../shared/components/section-workout/section-workout.component';
import { SectionWorkoutModule } from '../../shared/components/section-workout/section-workout.module';
import { SectionWorkoutData } from '../../shared/models/section.home.data';

const routes: Array<Route & { data : SectionWorkoutData}> = [{ 
    path: '', 
    component: SectionWorkoutComponent,
    data:  {
        // must correspond to assets/challenges/{folderName}
        sectionName:'components'
    }
}];

@NgModule({
    imports: [SectionWorkoutModule, RouterModule.forChild(routes)],
    declarations: [],
    providers: []
})
export class ComponentsAndDirectivesWorkoutsModule {}