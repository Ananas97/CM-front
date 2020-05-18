import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {AnalysisComponent} from './analysis/analysis.component';
import {MatChipsModule} from '@angular/material/chips';
import {ArchivesComponent} from './archives/archives.component';
import {APP_BASE_HREF} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {ProgressComponent} from './analysis/progress/progress.component';
import {DndDirective} from './analysis/dnd.directive';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent,
    ArchivesComponent,
    ProgressComponent,
    DndDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
  exports: [AnalysisComponent, ArchivesComponent]
})
export class AppModule {
}
