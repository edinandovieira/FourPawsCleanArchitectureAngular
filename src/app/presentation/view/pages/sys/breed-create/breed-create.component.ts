import { BreedService } from './../../../../../data/sys/breed.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-breed-create',
  templateUrl: './breed-create.component.html',
  styleUrls: ['./breed-create.component.scss'],
  providers: [MessageService]
})
export class BreedCreateComponent {
  @ViewChild('breedFile') fileInput!: ElementRef;
  
  title = "Cadastro de Raças";
  loading: boolean = false;

  constructor(
    private breedService:BreedService,
    private messageService: MessageService
  ){

  }

  breed: string = "";
  breedFile: any;

  onFileSelected(event: any) {
    this.breedFile = event.target.files[0];
  }

  submitData() {
    let formData = new FormData();
    formData.set("nome",this.breed)
    formData.set("file",this.breedFile)

    try{
      this.loading = true;
      this.breedService.Create(formData)
        .subscribe(
          (response) => {
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Raça criada com sucesso, código: ' + response.codigo  + ' nome: ' + response.nome });
          }
        );
      
      this.breed = "";
      this.fileInput.nativeElement.value = "";
      this.loading = false;
    }catch (error) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Ocorreu um erro' });
      this.loading = false;
    }
  }

  form = {
    "title": "",
    "input": [
      {
        "title": "Raça",
        "placeholder": "Chow Chow",
        "type": "text",
        "grid": "col-12",
        "class": "w-full border-round-xl",
        "name": "breed",
        "ngModel": "breed",
        "change": "onFileSelected($event)"
      },
      {
        "title": "Thumbnail",
        "placeholder": "Nenhum arquivo escolhido",
        "type": "file",
        "grid": "col-12",
        "class": "w-full border-round-xl",
        "name": "breed",
        "ngModel": null,
        "change": null
      }
    ],
    "submit": {
      "class": "text-white w-full bg-send",
      "title":"SALVAR"
    }
  }
}
