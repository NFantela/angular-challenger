import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

// components
import { NotFoundComponent } from './not-found.component';
import { HomeComponent } from './home/home.component';

// material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: environment.navRoutes.components, 
    loadChildren: () => import('./features/components-directives/components-directives.module').then(m => m.ComponentsAndDirectivesModule) 
  },
  // { path: environment.navRoutes.multiSettings, 
  //   loadChildren: () => import('./features/multi-settings/multi-settings.module').then(m => m.MultiSettingsModule) 
  // },
  // {
    {
      path: '**',
      redirectTo: environment.navRoutes.notFound
    },
    {
      path:environment.navRoutes.notFound,
      component:NotFoundComponent
    }
];


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
