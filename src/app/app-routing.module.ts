import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageAryaloComponent} from "./pages/page-aryalo/page-aryalo.component";
import {PageStudentListComponent} from "./pages/page-student-list/page-student-list.component";


const routes: Routes = [
  {path: 'aryalo', component: PageAryaloComponent},
  {path: 'student', component: PageStudentListComponent },

  {path: '', redirectTo: 'aryalo', pathMatch: "full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
