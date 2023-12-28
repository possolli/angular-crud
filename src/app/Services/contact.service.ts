import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ContactResponse {
  id: number
  fullname: string
  email: string
  subject: string
  message: string
  created_at: string
  updated_at: string
}

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private readonly API = 'http://127.0.0.1:8000/api/contacts'

  constructor(private httpClient: HttpClient) { }

  getMessages() {
    return this.httpClient.get(this.API);
  }

  sendMessage(inputData: object) {
    return this.httpClient.post(this.API, inputData);
  }

  deleteMessage(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}