import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: environment.navRoutes.components,
    pathMatch: 'full'
  },
  { path: environment.navRoutes.components, 
    loadChildren: () => import('./features/components-directives/components-directives.module').then(m => m.ComponentsAndDirectivesModule) 
  },
  // { path: environment.navRoutes.multiSettings, 
  //   loadChildren: () => import('./features/multi-settings/multi-settings.module').then(m => m.MultiSettingsModule) 
  // },
  // {
  //   path: '**',
  //   redirectTo: environment.navRoutes.home
  // }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
