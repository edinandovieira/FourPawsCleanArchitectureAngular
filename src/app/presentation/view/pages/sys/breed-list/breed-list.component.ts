import { Component, OnInit } from '@angular/core';
import { BreedService } from 'src/app/data/sys/breed.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss']
})
export class BreedListComponent implements OnInit {
  title = "Consultar Raça";
  breedFilter: any;

  constructor(
    private breedService:BreedService, private router: Router
  ){

  }

  breedEdit(id: string){
    this.router.navigate(['sys/breed/edit/'+id]);
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
