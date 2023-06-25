import { SaleService } from './../../../../../data/sys/sale.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss']
})
export class SaleListComponent implements OnInit {
  title = "Consultar Vendas"
  saleFilter: any;

  constructor(
    private saleService:SaleService, private router: Router
  ){

  }

  saleView(id: string){
    this.router.navigate(['sys/sale/detail/'+id]);
  }

  ngOnInit(){
    this.saleService.GetAll().subscribe(
      (response) => {        
        this.saleFilter = response;
      }
    );
  }
}
