import {Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistenciasangular',
  templateUrl: './resistenciasangular.component.html',
  styleUrls: ['./resistenciasangular.component.css']
})

export class ResistenciasangularComponent{
  resistencia!: FormGroup;
  valor!: number;
  valorMax!: number;
  valorMin!: number;
  color1Seleccionado!: string;
  color2Seleccionado!: string;
  color3Seleccionado!: string;
  toleranciaSeleccionada!: string;
  colores: string[] = ['Negro', 'Cafe', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Morado', 'Gris', 'Blanco'];
  constructor() { }
  ngOnInit(): void {
    this.resistencia = new FormGroup({
      color1: new FormControl('Negro', Validators.required),
      color2: new FormControl('Negro', Validators.required),
      color3: new FormControl('Negro', Validators.required),
      tolerancia: new FormControl('Oro', Validators.required)
    });
  }
  calcular() {
    const color1Value = this.convertirColor(this.resistencia.get('color1')?.value);
    const color2Value = this.convertirColor(this.resistencia.get('color2')?.value);
    const color3Value = this.convertirColor(this.resistencia.get('color3')?.value);
    const toleranciaValue = this.tolerancia(this.resistencia.get('tolerancia')?.value);
    this.valor = (color1Value * 10 + color2Value) * Math.pow(10, color3Value);
    this.valorMax = this.valor + (this.valor * toleranciaValue);
    this.valorMin = this.valor - (this.valor * toleranciaValue);

    this.color1Seleccionado = this.resistencia.get('color1')?.value.toLowerCase();
    this.color2Seleccionado = this.resistencia.get('color2')?.value.toLowerCase();
    this.color3Seleccionado = this.resistencia.get('color3')?.value.toLowerCase();
    this.toleranciaSeleccionada = this.resistencia.get('tolerancia')?.value.toLowerCase();
  }
  convertirColor(color: string | null): number {
    switch (color) {
      case 'Negro': return 0;
      case 'Cafe': return 1;
      case 'Rojo': return 2;
      case 'Naranja': return 3;
      case 'Amarillo': return 4;
      case 'Verde': return 5;
      case 'Azul': return 6;
      case 'Morado': return 7;
      case 'Gris': return 8;
      case 'Blanco': return 9;
      default: return 0;
    }
  }
  tolerancia(tolerancia: string | null): number{
    if (tolerancia === 'Oro') return 0.05;
    else if (tolerancia === 'Plata') return 0.1;
    return 0;
  }
}