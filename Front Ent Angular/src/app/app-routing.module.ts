import { MainComponent } from './Components/Pages/main/main.component';
import { SolveComponent } from './Components/Pages/solve/solve.component';
import { TopComponent } from './Components/Pages/top/top.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'solve', component: SolveComponent
  },
  {
    path: 'top', component: TopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
