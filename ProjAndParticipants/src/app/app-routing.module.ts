import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectlistComponent } from 'src/app/projectlist/projectlist.component';
import { ContactlistComponent } from 'src/app/contactlist/contactlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectlistComponent },
  { path: 'contacts', component: ContactlistComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
