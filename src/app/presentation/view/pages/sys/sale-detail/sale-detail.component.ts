import { SaleService } from './../../../../../data/sys/sale.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.scss']
})
export class SaleDetailComponent implements OnInit {
  title = "Detalhes da Venda";
  sale: any;
  id: any;

  constructor(
    private saleService:SaleService,
    private route: ActivatedRoute
  ){
    
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    this.saleService.Get(this.id).subscribe(
      (response) =>{
        this.sale = response.$values;
        console.log(this.sale);
        console.log(this.sale[0].CodigoCliente + '-' + this.sale[0].Clientes.Nome )
      }
    )
  }
}
