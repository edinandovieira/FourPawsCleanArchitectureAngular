import { CategoryService } from './../../../../../data/sys/category.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

interface usuario {
    codigo: string,
    nome: string,
    tipo: string,
    status: string
}

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
  providers: [MessageService]
})
export class CategoryEditComponent implements OnInit {
  title = "Alterar de Categoria";
  loading: boolean = false;

  user: usuario;
  id: any;
  statusOpt: string[] = [];

  constructor(
    private messageService: MessageService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {
    this.user = {
      codigo: '',
      nome: '',
      tipo: '',
      status: ''
    };
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    this.categoryService.Get(this.id)
      .subscribe(
        (response) => {
          this.statusOpt = this.categoryService.GetStatus();
          this.user = response;
        }
      )
  }

  submitData(){
    this.loading = true;

    this.categoryService.Update(this.id, this.user)
      .subscribe(
        (response) => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Produto alterado com sucesso'});
          this.loading = false;
        }
      )
    
  }
}
