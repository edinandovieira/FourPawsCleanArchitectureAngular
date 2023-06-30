import { baseUrl } from '../../../../../../environments/environment';
import { ProductService } from './../../../../../data/sys/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  baseUrl = baseUrl;

  title = "Consultar Produtos"
  productFilter: any;

  constructor(
    private productService:ProductService, private router: Router
  ){

  }

  productEdit(id: string){
    this.router.navigate(['sys/product/edit/'+id]);
  }

  ngOnInit(){
    this.productService.GetAll().subscribe(
      (response) => {
        let productOrder = response.sort((a: any, b: any) => a.nome.localeCompare(b.nome));

        this.productFilter = productOrder;
      }
    );
  }
}
