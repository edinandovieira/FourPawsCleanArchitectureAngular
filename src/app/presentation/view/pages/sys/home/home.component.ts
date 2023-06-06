import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sysHomeMenu = [
    {
      'title': 'Cadastrar',
      'navigate': [
        {
          'icon': 'pi-plus-circle',
          'title': 'Raça',
          'route': 'breed/create'
        },
        {
          'icon': 'pi-plus-circle',
          'title': 'Pet',
          'route': 'pet/create'
        },
        {
          'icon': 'pi-user-plus',
          'title': 'Usuário',
          'route': 'user/create'
        },
        {
          'icon': 'pi-plus-circle',
          'title': 'Produtos',
          'route': 'product/create'
        }
      ]
    },
    {
      'title': 'Consultar',
      'navigate': [
        {
          'icon': 'pi-search',
          'title': 'Raça',
          'route': 'breed/list'
        },
        {
          'icon': 'pi-search',
          'title': 'Pet',
          'route': 'pet/list'
        },
        {
          'icon': 'pi-search',
          'title': 'Usuário',
          'route': 'user/list'
        },
        {
          'icon': 'pi-search',
          'title': 'Produtos',
          'route': 'product/list'
        }
      ]
    },
    {
      'title': 'Consultar',
      'navigate': [
        {
          'icon': 'pi-book',
          'title': 'Vendas',
          'route': 'sales/report'
        }
      ]
    }
  ]
}
