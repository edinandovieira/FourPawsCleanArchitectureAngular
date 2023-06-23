import { BreedService } from './../../../../../data/sys/breed.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breed-edit',
  templateUrl: './breed-edit.component.html',
  styleUrls: ['./breed-edit.component.scss'],
  providers: [MessageService]
})
export class BreedEditComponent implements OnInit {
  @ViewChild('breedFile') fileInput!: ElementRef;

  title = "Alterar Raça";
  
  loading: boolean = false;

  constructor(
    private breedService:BreedService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ){

  }

  breed: any;
  statusSelected: string = "";
  statusOpt: { key: string, value: string }[] = [];
  breedFile: any;
  id: any;

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    this.breedService.Get(this.id).subscribe(
      (response) => {
        for (const key in this.breedService.GetStatus()) {
          if (this.breedService.GetStatus().hasOwnProperty(key)) {
            this.statusOpt.push({ key, value: this.breedService.GetStatus()[key] });
          }
        }
        this.breed = response;
        this.statusSelected = response.status.charAt(0).toUpperCase();
        //this.messageService.add({severity: 'success', summary: 'Success', detail: 'Raça criada com sucesso, código: ' + response.codigo  + ' nome: ' + response.nome });
      }
    );;
  }


  onFileSelected(event: any) {
    this.breedFile = event.target.files[0];
  }

  submitData() {
    /*let formData = new FormData();
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
    }*/
  }
}
