import { ClientService } from './../../../../../data/sys/client.service';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss'],
  providers: [MessageService]
})
export class ClientCreateComponent {
  title = "Cadastro de Clientes";

  client = "";
  rg = "";
  cpf = "";
  address = "";
  email = "";
  neighborhood = "";
  phone = "";
  mobile = "";

  constructor(
    private clientService: ClientService,
    private messageService: MessageService
  ){

  }

  submitData(){
    let form = { 
      nome: this.client, 
      rg: this.rg, 
      cpf: this.cpf, 
      endereco: this.address, 
      email: this.email,
      bairro: this.neighborhood,
      telefone: this.phone,
      celular: this.mobile
    };

    this.clientService.Create(form)
      .subscribe(
        (response) => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Produto criado com sucesso, código: ' + response.codigo  + ' nome: ' + response.nome });
        }
      );

    this.mobile = this.phone = this.neighborhood = this.email = this.address = this.cpf = this.rg = this.client = "";
  }
}
