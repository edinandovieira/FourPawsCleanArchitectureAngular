import { CategoryService } from './../../../../../data/sys/category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  title = "Consultar Categorias"
  categories: any;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ){

  }

  ngOnInit(){
    this.categoryService.GetAll()
      .subscribe(
        (response) => {
          this.categories = response;
        }
      )
  }

  productEdit(id: string){
    this.router.navigate(['sys/category/edit/'+id]);
  }
} 
