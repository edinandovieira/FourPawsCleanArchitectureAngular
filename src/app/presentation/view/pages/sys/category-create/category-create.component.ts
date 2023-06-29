import { CategoryService } from './../../../../../data/sys/category.service';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss'],
  providers: [MessageService]
})
export class CategoryCreateComponent {
  title = "Cadastro de Categoria";
  loading: boolean = false;

  category = "";

  constructor(
    private messageService: MessageService,
    private categoryService: CategoryService
  ){

  }

  submitData(){
    this.loading = true;

    let form = {
      nome: this.category
    }

    this.categoryService.Create(form)
      .subscribe(
        (response) => {
          this.loading = false;
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Categoria criada com sucesso, código: ' + response.codigo  + ' nome: ' + response.nome });
          this.category = "";
        }
      )
  }
}
