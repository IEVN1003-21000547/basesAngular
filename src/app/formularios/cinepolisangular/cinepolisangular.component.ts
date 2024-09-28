import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolisangular',
  templateUrl: './cinepolisangular.component.html',
  styleUrls: ['./cinepolisangular.component.css']
})
export class CinepolisangularComponent {
  formulario!: FormGroup;
  valorPagar!: number;
  valorPagar1!: number;
  valorPagar2!: number;
  mensajeFinal!: string;
  constructor() { }
  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      cantCompradores: new FormControl('', Validators.required),
      tarjeta: new FormControl('', Validators.required), 
      cantBoletos: new FormControl('', Validators.required),
    });
  }
  realizarCompra(): void {
    let nombre = this.formulario.get('nombre')?.value;
    let cantCompradores = parseInt(this.formulario.get('cantCompradores')?.value);
    let tarjeta = parseInt(this.formulario.get('tarjeta')?.value);
    let cantBoletos = parseInt(this.formulario.get('cantBoletos')?.value);
    if (cantCompradores == 1 && cantBoletos <= 7) {
      if (cantBoletos >= 5) {
        if (tarjeta == 1) {
          this.valorPagar = cantBoletos * 12;
          this.valorPagar1 = this.valorPagar * 0.235;
          this.valorPagar2 = this.valorPagar - this.valorPagar1;
        } else if (tarjeta == 2) {
          this.valorPagar = cantBoletos * 12;
          this.valorPagar1 = this.valorPagar * 0.135;
          this.valorPagar2 = this.valorPagar - this.valorPagar1;
        }
      } else if (cantBoletos >= 3) {
        if (tarjeta == 1) {
          this.valorPagar = cantBoletos * 12;
          this.valorPagar1 = this.valorPagar * 0.20;
          this.valorPagar2 = this.valorPagar - this.valorPagar1;
        } else if (tarjeta == 2) {
          this.valorPagar = cantBoletos * 12;
          this.valorPagar1 = this.valorPagar * 0.10;
          this.valorPagar2 = this.valorPagar - this.valorPagar1;
        }
      } else if (cantBoletos <= 2) {
        if (tarjeta == 1) {
          this.valorPagar = cantBoletos * 12;
          this.valorPagar1 = this.valorPagar * 0.10;
          this.valorPagar2 = this.valorPagar - this.valorPagar1;
        } else if (tarjeta == 2) {
          this.valorPagar1 = cantBoletos * 12;
          this.valorPagar2 = this.valorPagar1;
        }
      }
    } else if (cantCompradores == 1 && cantBoletos >= 7) {
      this.mensajeFinal = "No es posible que un solo comprador compre más de 7 boletos.";
      return;
    } else if (cantCompradores >= 2) {
      if (cantBoletos > 5) {
        if (tarjeta == 1) {
          this.valorPagar = cantBoletos * 12;
          this.valorPagar1 = this.valorPagar * 0.235;
          this.valorPagar2 = this.valorPagar - this.valorPagar1;
        } else if (tarjeta == 2) {
          this.valorPagar = cantBoletos * 12;
          this.valorPagar1 = this.valorPagar * 0.15;
          this.valorPagar2 = this.valorPagar - this.valorPagar1;
        }
      } else if (cantBoletos >= 3) {
        if (tarjeta == 1) {
          this.valorPagar = cantBoletos * 12;
          this.valorPagar1 = this.valorPagar * 0.20;
          this.valorPagar2 = this.valorPagar - this.valorPagar1;
        } else if (tarjeta == 2) {
          this.valorPagar = cantBoletos * 12;
          this.valorPagar1 = this.valorPagar * 0.10;
          this.valorPagar2 = this.valorPagar - this.valorPagar1;
        }
      } else if (cantBoletos <= 2) {
        if (tarjeta == 1) {
          this.valorPagar = cantBoletos * 12;
          this.valorPagar1 = this.valorPagar * 0.10;
          this.valorPagar2 = this.valorPagar - this.valorPagar1;
        } else if (tarjeta == 2) {
          this.valorPagar1 = cantBoletos * 12;
          this.valorPagar2 = this.valorPagar1;
        }
      }
    }
    if (tarjeta === 1) {
      this.mensajeFinal = `Hola ${nombre}, compraste ${cantBoletos} boletos. El costo es de` +this.valorPagar2.toFixed(2)+"pesos mexicanos ya que si tienes la tarjeta Cineco.";
    } else if (tarjeta === 2) {
      this.mensajeFinal = `Hola ${nombre}, compraste ${cantBoletos} boletos. El costo es de ${this.valorPagar2} pesos mexicanos ya que no tienes la tarjeta Cineco.`;
    }
  }
}
