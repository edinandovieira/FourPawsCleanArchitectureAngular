import { CategoryService } from './../../../../../data/sys/category.service';
import { ProductService } from './../../../../../data/sys/product.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
  providers: [MessageService]
})
export class ProductCreateComponent implements OnInit {
  @ViewChild('productFile') fileInput!: ElementRef;

  title = "Cadastro de Produtos";
  loading: boolean = false;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private messageService: MessageService
  ){

  }

  product: any;
  category: any = "";
  categoryOpt: any;
  unit: any;
  stock: any;
  price: any;  
  productFile: any;

  ngOnInit(){
    this.categoryService.GetAll().subscribe(
      (response) => {
        this.categoryOpt = response;
      }
    );
  }

  onFileSelected(event: any) {
    this.productFile = event.target.files[0];
  }

  submitData() {
    let formData = new FormData();
    formData.set("nome", this.product)
    formData.set("codigoCategoria", this.category)
    formData.set("unidade", this.unit)
    formData.set("estoque", this.stock)
    formData.set("preco", this.price)
    formData.set("file", this.productFile)

    try{
      this.loading = true;
      this.productService.Create(formData)
        .subscribe(
          (response) => {
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Produto criado com sucesso, código: ' + response.codigo  + ' nome: ' + response.nome });
          }
        );
      
      this.product = this.category = this.unit = this.stock = this.price = "";
      this.fileInput.nativeElement.value = "";
      this.loading = false;
    }catch (error) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Ocorreu um erro' });
      this.loading = false;
    }
  }
}
