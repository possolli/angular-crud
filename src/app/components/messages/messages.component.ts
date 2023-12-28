import { Component } from '@angular/core';
import { ContactService, ContactResponse } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(private contactService: ContactService) { }

  messages!: ContactResponse[]

  ngOnInit() {
    this.getMessagesList()
  }

  getMessagesList() {
    this.contactService.getMessages().subscribe((res:any) => {
      console.log(res)
      this.messages = res
    })
  }

  deleteMessage(id: number) {
    this.contactService.deleteMessage(id).subscribe(
      () => {
        console.log('Mensagem excluída com sucesso!')
        this.getMessagesList()
      },
      (error) => {
        console.error('Erro ao excluir mensagem:', error)
      }
    );
  }
}