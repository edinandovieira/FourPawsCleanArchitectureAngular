import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  publicity = [
    '../../../../../assets/publicity/001.png',
    '../../../../../assets/publicity/002.png'
  ]

  categories = [
    {
      'icon': '../../../../../assets/categories/mobiliario.svg',
      'name': 'Mobiliários'
    },
    {
      'icon': '../../../../../assets/categories/medicine.svg',
      'name': 'Medicina e Saúde'
    },
    {
      'icon': '../../../../../assets/categories/shopping.svg',
      'name': 'Carrinho de Compras'
    },
    {
      'icon': '../../../../../assets/categories/toys.svg',
      'name': 'Brinquedos'
    }
  ]
}
