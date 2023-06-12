import { Component } from '@angular/core';

@Component({
  selector: 'app-breed-create',
  templateUrl: './breed-create.component.html',
  styleUrls: ['./breed-create.component.scss']
})
export class BreedCreateComponent {
  title = "Cadastro de Raças";

  form = {
    "title": "",
    "input": [
      {
        "title": "Raça",
        "placeholder": "Chow Chow",
        "type": "text",
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
