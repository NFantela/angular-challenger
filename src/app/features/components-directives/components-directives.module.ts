import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'workout/:workoutId',
    loadChildren: () => import('./components-directives-workouts/components-directives-workouts.module').then(m => m.ComponentsAndDirectivesWorkoutsModule),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./components-directives-home/components-directives-home.module').then(m => m.ComponentsAndDirectivesHomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  providers: []
})
export class ComponentsAndDirectivesModule { }