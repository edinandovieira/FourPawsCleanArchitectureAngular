import { ClientService } from './../../../../../data/sys/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  title = "Consultar Clientes"
  clients: any;

  constructor(
    private clientService:ClientService
  ){

  }

  ngOnInit(){
    this.clientService.GetAll().subscribe(
      (response) => {
        this.clients = response;
      }
    );
  }
}
