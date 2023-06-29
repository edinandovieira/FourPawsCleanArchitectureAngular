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
    this.productService.Get(value.target.value).subscribe(
      (response) => {
        this.unit = response.unidade
        this.maxQuantity = response.estoque
        this.quantity = this.maxQuantity > 0 ? 1 : 0 
        this.currentPrice = this.price = response.preco
      }
    )
  }

  priceCalculate(){
    return this.currentPrice = this.quantity * this.price
  }

  sendToCart(){
    const item = { codigocliente: this.client, codigoproduto: this.product, nome: this.productName, quantidade: this.quantity, preco: this.currentPrice };
    this.cart.push(item);

    this.unit = this.product = "";
    this.currentPrice = this.price = this.maxQuantity = this.quantity = 0;
  }

  removeCart(id: any){
    this.cart.splice(id, 1);
  }

  submitData(){
    if(this.client != "" && this.cart.length !== 0){
      this.saleService.Create(this.cart)
        .subscribe(
          (response) => {
            console.log(response);
            this.cart = [];
            this.client = "";
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Venda cadastrada com sucesso, código: ' + response.$values[0].CodigoVenda });
          }
        )
    }else if(this.client == ""){
      this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Favor escolher um cliente' });
    }else if(this.cart.length == 0){
      this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Favor escolher pelo menos um produto' });
    }else{
      this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Favor escolher um cliente e pelo menos um produto' });
    }
    
  }
}
