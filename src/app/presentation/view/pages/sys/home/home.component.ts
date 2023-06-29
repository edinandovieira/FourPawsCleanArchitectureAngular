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
          'title': 'Venda',
          'route': 'sale/create'
        },{
          'icon': 'pi-plus-circle',
          'title': 'Raça',
          'route': 'breed/create'
        },
        {
          'icon': 'pi-plus-circle',
          'title': 'Cliente',
          'route': 'client/create'
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
        },
        {
          'icon': 'pi-plus-circle',
          'title': 'Categoria',
          'route': 'category/create'
        }
      ]
    },
    {
      'title': 'Consultar',
      'navigate': [
        {
          'icon': 'pi-search',
          'title': 'Venda',
          'route': 'sale/list'
        },{
          'icon': 'pi-search',
          'title': 'Raça',
          'route': 'breed/list'
        },
        {
          'icon': 'pi-search',
          'title': 'Cliente',
          'route': 'client/list'
        },
        {
          'icon': 'pi-search',
          'title': 'Usuário',
          'route': 'user/list'
        },
        {
          'icon': 'pi-search',
          'title': 'Produto',
          'route': 'product/list'
        },
        {
          'icon': 'pi-search',
          'title': 'Categoria',
          'route': 'category/list'
        }
      ]
    },
    {
      'title': 'Relatório',
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
