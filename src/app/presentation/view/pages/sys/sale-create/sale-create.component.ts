import { ProductService } from './../../../../../data/sys/product.service';
import { ClientService } from './../../../../../data/sys/client.service';
import { SaleService } from './../../../../../data/sys/sale.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrls: ['./sale-create.component.scss'],
  providers: [MessageService]
})
export class SaleCreateComponent implements OnInit {
  title = "Cadastro de Vendas";
  loading: boolean = false;

  client = "";
  clients: any;
  product = "";
  productName = "";
  products: any;
  unit = "";
  quantity = 0;
  maxQuantity = 0;
  currentPrice = 0;
  price = 0;

  cart: any[] = [];

  constructor(
    private saleService: SaleService,
    private clientService: ClientService,
    private productService: ProductService,
    private messageService: MessageService
  ){

  }

  ngOnInit(){
    this.clientService.GetAll().subscribe(
      (response) => {
        this.clients = response;
      }
    );

    this.productService.GetAll().subscribe(
      (response) => {
        this.products = response;
      }
    );
  }

  selectedProduct(value: any){
    this.productName = value.target.options[value.target.selectedIndex].text;
    console.log(value.target);
    this.productService.Get(value.target.value).subscribe(
      (response) => {
        this.unit = response.unidade
        this.maxQuantity = response.estoque
        this.currentPrice = this.price = response.preco
      }
    )
  }

  priceCalculate(){
    return this.currentPrice = this.quantity * this.price
  }

  sendToCart(){
    const item = { produto: this.product, nome: this.productName, quantidade: this.quantity, preco: this.price };
    this.cart.push(item);
  }

  removeCart(id: any){
    this.cart.splice(id, 1);
  }

  submitData(){

  }
}
