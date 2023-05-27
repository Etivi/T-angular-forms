import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioGrandeComponent } from './routes/formulario-grande/formulario-grande.component';
import { FormularioComponent } from './routes/formulario/formulario.component';

const routes: Routes = [
  {path : 'form-group', component : FormularioGrandeComponent},
  {path : "form", component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
