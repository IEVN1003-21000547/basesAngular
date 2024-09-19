import { Component } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list', //el select es para que cuando lo mmande llamar sera con el nombre app-product-list
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'//para hacer referencia al archuvo de estilo
})
export class ProductListComponent {
  title="Saludo de variable";

  imageWidth:number=50;
  imageMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';


  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:IProducto[]=[
    {
      "productoId":1,
      "Modelo":'Sentra',
      "Descripcion":'4 puertas familiar',
      "year":"Febrero 3 2022",
      "Precio": 20000,
      "Marca": "NISSAN",
      "Color": "Morado",
      "imagenUrl":"https://th.bing.com/th/id/R.f8d1e7c8290df53fefbe15cf65171da3?rik=x8y98NngSKsXSw&riu=http%3a%2f%2fst.automobilemag.com%2fuploads%2fsites%2f11%2f2016%2f11%2f2017-Nissan-Sentra-NISMO-rear-three-quarter-04.jpg&ehk=UtQVq1uied4nwtul%2bH0xGhFhBIyxoY8SkOV2L98zWuE%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      "productoId":2,
      "Modelo":'R8',
      "Descripcion":'2 puertas',
      "year":"Marzo 3 2023",
      "Precio": 30000,
      "Marca": "AUDI",
      "Color": "Blanco",
      "imagenUrl":"https://www.motorverso.com/wp-content/uploads/2017/04/Audi-R8-V10-2017-White-1.jpg"
    },
    {
      "productoId":3,
      "Modelo":'Rio',
      "Descripcion":'4 puertas',
      "year":"Agosto 3 2022",
      "Precio": 60000,
      "Marca": "KIA",
      "Color": "Azul",
      "imagenUrl":"https://media.ed.edmunds-media.com/kia/rio/2022/oem/2022_kia_rio_sedan_s_fq_oem_1_1280.jpg"
    }
  ]

}
