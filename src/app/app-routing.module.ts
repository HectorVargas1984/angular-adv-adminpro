import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const router: Routes = [  
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component: NopagefoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(router),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
