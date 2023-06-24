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
  breedImg: string = "";
  statusOpt: string[] = [];
  breedFile: any;
  id: any;

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    this.breedService.Get(this.id).subscribe(
      (response) => {
        this.statusOpt = this.breedService.GetStatus();
        this.breed = response;
        this.breedImg = `https://localhost:7038/v1/raca/avatar/${this.id}?timestamp=${Date.now()}`;
        //this.messageService.add({severity: 'success', summary: 'Success', detail: 'Raça criada com sucesso, código: ' + response.codigo  + ' nome: ' + response.nome });
      }
    );;
  }


  onFileSelected(event: any) {
    this.breedFile = event.target.files[0];
  }

  submitData() {
    let formData = new FormData();
    formData.set("nome",this.breed.nome)
    formData.set("status",this.breed.status)
    formData.set("file",this.breedFile)

    try{
      this.loading = true;
      this.breedService.Update(this.id, formData)
        .subscribe(
          (response) => {
            this.breed = response;
            this.breedImg = `https://localhost:7038/v1/raca/avatar/${this.id}?timestamp=${Date.now()}`;
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Raça alterada com sucesso'});
          }
        );
      
      this.fileInput.nativeElement.value = "";
      this.loading = false;
    }catch (error) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Ocorreu um erro' });
      this.loading = false;
    }
  }
}
