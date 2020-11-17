import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Sanitizer } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';


// components
import { NotFoundComponent } from './not-found.component';
import { HomeComponent } from './home/home.component';

// material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapDataPipe } from './pipes/mapper/mapper.pipe';
import { NgDompurifyModule } from './global-shared/ng-dom-purify/ng-dompurify.module';
import { NgDompurifySanitizer } from './global-shared/ng-dom-purify/ng-dompurify.service';
import { DOMPURIFY_CONFIG } from './global-shared/ng-dom-purify/tokens/dompurify-config';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: environment.navRoutes.components.sectionName, 
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
    HomeComponent,
    MapDataPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    NgDompurifyModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    /** Replacing default Sanitizer with our custom one and providing config
     * https://github.com/TinkoffCreditSystems/ng-dompurify
     */
    {
      provide: Sanitizer,
      useClass: NgDompurifySanitizer,
    },
    {
      provide: DOMPURIFY_CONFIG,
      useValue: { FORBID_ATTR: ['id'] },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
