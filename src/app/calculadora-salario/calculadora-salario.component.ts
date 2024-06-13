import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-salario',
  templateUrl: './calculadora-salario.component.html',
  styleUrls: ['./calculadora-salario.component.css']
})
export class CalculadoraSalarioComponent {
  salario: number | undefined;
  descuentoRenta: number | undefined;
  descuentoAFP: number | undefined;
  descuentoISSS: number | undefined;
  salarioLiquido: number | undefined;

  calcularDescuentoRenta() {
    if (this.salario !== undefined) {
      if (this.salario >= 0.01 && this.salario <= 472.00) {
        this.descuentoRenta = 0;
      } else if (this.salario >= 472.01 && this.salario <= 895.24) {
        this.descuentoRenta = (((this.salario - ((this.salario * 0.0725) + (this.salario * 0.03))) - 472) * 0.1 + 17.67);
      } else if (this.salario >= 895.25 && this.salario <= 2038.10) {
        this.descuentoRenta = (((this.salario - ((this.salario * 0.0725) + (this.salario * 0.03))) - 895.24) * 0.2 + 60.00);
      } else if (this.salario >= 2038.11) {
        this.descuentoRenta = (((this.salario - ((this.salario * 0.0725) + (this.salario * 0.03))) - 2038.10) * 0.3 + 288.57);
      }
    }
  }

  calcularSalarioLiquido() {
    if (this.salario !== undefined) {
      this.calcularDescuentoRenta();
      this.descuentoAFP = this.salario * 0.0725;
      if (this.salario > 1000) {
        this.descuentoISSS = Math.min(this.salario * 0.03, 30);
      } else {
        this.descuentoISSS = this.salario * 0.03;
      }
      this.salarioLiquido = this.salario - this.descuentoAFP - this.descuentoISSS - (this.descuentoRenta || 0);
    }
  }
}
