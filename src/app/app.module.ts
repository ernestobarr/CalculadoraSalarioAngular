import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculadoraSalarioComponent } from './calculadora-salario/calculadora-salario.component'; // Asegúrate de importar el componente

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraSalarioComponent // Añade el componente a las declaraciones
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
