import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnalysisComponent} from './analysis/analysis.component';
import {ArchivesComponent} from './archives/archives.component';


const routes: Routes = [
  {path: 'analysis', component: AnalysisComponent},
  {path: 'archives', component: ArchivesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
