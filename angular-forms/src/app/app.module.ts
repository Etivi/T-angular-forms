import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormularioGrandeComponent } from './routes/formulario-grande/formulario-grande.component';
import { FormularioComponent } from './routes/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    FormGroupComponent,
    FormularioGrandeComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
