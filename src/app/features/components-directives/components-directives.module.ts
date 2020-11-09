import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionHomeModule } from '../shared/components/section-home.module';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./components-directives-home/components-directives-home.module').then(m => m.ComponentsAndDirectivesHomeModule),
    },
    { path: 'workout:workoutId', 
      loadChildren: () => import('./components-directives-workouts/components-directives-workouts.module').then(m => m.ComponentsAndDirectivesWorkoutsModule),
    },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    providers: []
})
export class ComponentsAndDirectivesModule {}