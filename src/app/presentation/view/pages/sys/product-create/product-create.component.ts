import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  title = "Cadastro de Produtos";

  form = {
    "title": "",
    "input": [
      {
        "title": "Produto",
        "placeholder": "Osso",
        "type": "text",
        "grid": "col-12",
        "class": "w-full border-round-xl"
      },
      {
        "title": "Categoria",
        "placeholder": "Brinquedo",
        "type": "select",
        "grid": "col-12",
        "class": "w-full border-round-xl"
      },
      {
        "title": "Unidade",
        "placeholder": "Un",
        "type": "select",
        "grid": "col-12",
        "class": "w-full border-round-xl"
      },
      {
        "title": "Estoque",
        "placeholder": "50",
        "type": "number",
        "grid": "col-12",
        "class": "w-full border-round-xl"
      },
      {
        "title": "Preço",
        "placeholder": "R$ 8,00",
        "type": "number",
        "grid": "col-12",
        "class": "w-full border-round-xl"
      },
      {
        "title": "Thumbnail",
        "placeholder": "Nenhum arquivo escolhido",
        "type": "file",
        "grid": "col-12",
        "class": "w-full border-round-xl"
      }
    ],
    "submit": {
      "class": "text-white w-full bg-send",
      "title":"SALVAR"
    }
  }
}
