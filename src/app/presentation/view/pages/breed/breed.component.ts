import { BreedService } from './../../../../data/sys/breed.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent implements OnInit {
  breedFilter!: Record<string, any>;

  constructor(
    private breedService:BreedService
  ){

  }

  ngOnInit(){
    this.breedService.GetAll().subscribe(
      (response) => {
        let breedOrder = response.sort((a: any, b: any) => a.nome.localeCompare(b.nome));
        let breedFiltered = breedOrder.reduce((i: { [key: string]: any[] },v: any) => {
          let firstLetter = v.nome.charAt(0).toUpperCase();

          if(!i[firstLetter]){
            i[firstLetter] = [];
          }

          i[firstLetter].push(v);
          return i;
        }, {})
        
        this.breedFilter = breedFiltered;
      }
    );
  }
}
