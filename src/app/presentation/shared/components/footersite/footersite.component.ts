import { Component } from '@angular/core';

@Component({
  selector: 'app-footersite',
  templateUrl: './footersite.component.html',
  styleUrls: ['./footersite.component.scss']
})
export class FootersiteComponent {
  public logo02 = "../../../../../assets/logo02.svg";

  footerList = [
    {
      'nome': 'Informações',
      'list': [
        {'nome': 'Quem somos', 'route': ''},
        {'nome': 'Política de Privacidade', 'route': ''},
        {'nome': 'Guia de Raças - Cachorros', 'route': '/breed'}
      ]
    },
    {
      'nome': 'Serviço ao Cliente',
      'list': [
        {'nome': 'Contato', 'route': ''},
        {'nome': 'Produtos', 'route': ''}
      ]
    },
    {
      'nome': 'Minha Conta',
      'list': [
        {'nome': 'Minha Conta', 'route': ''},
        {'nome': 'Histórico de Pedidos', 'route': ''}
      ]
    },
    {
      'nome': 'Siga-nos',
      'list': []
    }
  ]
}
