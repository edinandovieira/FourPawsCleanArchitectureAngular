import { baseUrl } from '../../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { BreedService } from 'src/app/data/sys/breed.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss'],
  providers: [MessageService]
})
export class BreedListComponent implements OnInit {
  baseUrl = baseUrl;

  title = "Consultar Raça";
  breedFilter: any;

  constructor(
    private messageService: MessageService,
    private breedService:BreedService, 
    private router: Router
  ){

  }

  breedEdit(id: string){
    this.router.navigate(['sys/breed/edit/'+id]);
  }

  breedRemove(id: string, i: any){
    this.breedService.Remove(id)
      .subscribe(
        (response) => {
          this.breedFilter.splice(id, 1);
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Raça removida com sucesso'});
        }
      )
  }

  ngOnInit(){
    this.breedService.GetAll().subscribe(
      (response) => {
        let breedOrder = response.sort((a: any, b: any) => a.nome.localeCompare(b.nome));
        
        this.breedFilter = breedOrder;
      }
    );
  }
}
