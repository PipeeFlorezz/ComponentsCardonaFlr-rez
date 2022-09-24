import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public lugares: any = [];

  constructor() { 
    
  this.lugares = [
    {
      pais: 'China',
      capital: 'Pekín',
      habitantes: 20463000,
      imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1663609550/china_ff2joa.jpg'
    },
    {
      pais: 'Colombia',
      capital: 'Bogotá',
      habitantes: 7400000,
      imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1663609635/colombia_dsq6yp.jpg'
    },
    {
      pais: 'Inglaterra',
      capital: 'Londres',
      habitantes: 9950000,
      imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1663609510/driving-london-car-640x360_pxjblw.jpg'
    },
    {
      pais: 'Estados Unidos',
      capital: 'New York',
      habitantes: 8950000,
      imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1663609345/times-square_pdduqp.webp'
    },
    {
      pais: 'Thailandia',
      capital: 'Bangkok',
      habitantes: 69950844,
      imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1663609295/descarga_q2oxw8.jpg'
    },
    {
      pais: 'Belgica',
      capital: 'Region de bruselas',
      habitantes: 1209000,
      imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1662008400/setd9q7oaynqq9vxzsr2.jpg'
    }
  ];
  }

  ngOnInit(): void {
  }



}
