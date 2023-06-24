import { CategoryService } from './../../../../../data/sys/category.service';
import { ProductService } from './../../../../../data/sys/product.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

interface Item {
  nome: string;
  codigo: string;
  status: string;
}

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
  category: any;
  categoryOpt: any;
  unit: any;
  stock: any;
  price: any;
  productFile: any;

  cities: Item[] = [];
  selectedCity = "";

  ngOnInit(){
    this.categoryService.GetAll().subscribe(
      (response) => {
        this.categoryOpt = response;
        this.cities = response;
        console.log(this.cities);
      }
    );
  }

  onFileSelected(event: any) {
    this.productFile = event.target.files[0];
  }

  submitData() {
    let formData = new FormData();
    /*formData.set("nome",this.breed)
    formData.set("file",this.breedFile)

    try{
      this.loading = true;
      this.breedService.Create(formData)
        .subscribe(
          (response) => {
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Raça criada com sucesso, código: ' + response.codigo  + ' nome: ' + response.nome });
          }
        );
      
      this.breed = "";
      this.fileInput.nativeElement.value = "";
      this.loading = false;
    }catch (error) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Ocorreu um erro' });
      this.loading = false;
    }*/
  }

  form = {
    "title": "",
    "input": [
      {
        "title": "Produto",
        "placeholder": "Osso",
        "type": "text",
        "grid": "col-12",
        "class": "w-full border-round-xl"
      },
      {
        "title": "Categoria",
        "placeholder": "Brinquedo",
        "type": "select",
        "grid": "col-12",
        "class": "w-full border-round-xl"
      },
      {
        "title": "Unidade",
        "placeholder": "Un",
        "type": "select",
        "grid": "col-12",
        "class": "w-full border-round-xl"
      },
      {
        "title": "Estoque",
        "placeholder": "50",
        "type": "number",
        "grid": "col-12",
        "class": "w-full border-round-xl"
      },
      {
        "title": "Preço",
        "placeholder": "R$ 8,00",
        "type": "number",
        "grid": "col-12",
        "class": "w-full border-round-xl"
      },
      {
        "title": "Thumbnail",
        "placeholder": "Nenhum arquivo escolhido",
        "type": "file",
        "grid": "col-12",
        "class": "w-full border-round-xl"
      }
    ],
    "submit": {
      "class": "text-white w-full bg-send",
      "title":"SALVAR"
    }
  }
}
