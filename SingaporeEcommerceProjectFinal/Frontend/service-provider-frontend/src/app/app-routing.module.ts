import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';

const routes: Routes = [
  { path: '', redirectTo: 'service-provider', pathMatch: 'full' },
  { path: 'service-provider', component: ServiceProviderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
