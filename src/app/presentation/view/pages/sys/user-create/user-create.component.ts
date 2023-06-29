import { UserService } from './../../../../../data/sys/user.service';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  providers: [MessageService]
})
export class UserCreateComponent {
  title = "Cadastro de Usuário";
  loading: boolean = false;

  login = "";
  password = "";

  constructor(
    private messageService: MessageService,
    private userService: UserService
  ){

  }

  submitData(){
    this.loading = true;

    let user = {
      nome: this.login,
      senha: this.password,
      tipo: "A"
    }

    this.userService.Create(user)
      .subscribe(
        (response) => {
          this.loading = false;
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Categoria criada com sucesso, código: ' + response.codigo  + ' nome: ' + response.nome });
          this.password = this.login = "";
        }
      )
  }
}
