import { CategoryService } from './../../../../../data/sys/category.service';
import { ProductService } from './../../../../../data/sys/product.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  providers: [MessageService]
})
export class ProductEditComponent implements OnInit {
  @ViewChild('productFile') fileInput!: ElementRef;

  title = "Alterar Produto";
  
  loading: boolean = false;

  constructor(
    private productService:ProductService,
    private categoryService:CategoryService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ){

  }

  product: any;
  productImg: string = "";
  statusOpt: string[] = [];
  categoryOpt: any;
  productFile: any;
  id: any;

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    this.categoryService.GetAll().subscribe(
      (response) => {
        this.categoryOpt = response;
      }
    )

    this.productService.Get(this.id).subscribe(
      (response) => {
        this.statusOpt = this.productService.GetStatus();
        this.product = response;
        this.productImg = `https://localhost:7038/v1/produto/avatar/${this.id}?timestamp=${Date.now()}`;
      }
    );
  }

  onFileSelected(event: any) {
    this.productFile = event.target.files[0];
  }

  submitData() {
    let formData = new FormData();
    formData.set("nome", this.product.nome)
    formData.set("codigoCategoria", this.product.codigoCategoria)
    formData.set("unidade", this.product.unidade)
    formData.set("estoque", this.product.estoque)
    formData.set("preco", this.product.preco)
    formData.set("status", this.product.status)
    formData.set("file", this.productFile)

    try{
      this.loading = true;
      this.productService.Update(this.id, formData)
        .subscribe(
          (response) => {
            this.product = response;
            this.productImg = `https://localhost:7038/v1/produto/avatar/${this.id}?timestamp=${Date.now()}`;
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Produto alterado com sucesso'});
          },
          (error) => {
            console.log(error)
            this.messageService.add({severity: 'error', summary: 'Error', detail: 'Ocorreu um erro' });
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
