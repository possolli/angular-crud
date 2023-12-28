import { Component } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private contactService: ContactService, private router: Router) {}

  fullname!: string
  email!: string
  subject!: string
  message!: string

  isLoading: boolean = false
  loadingTitle: string = 'Loading'

  errors: any = []

  sendMessage() {

    this.isLoading = true
    this.loadingTitle = 'Saving'

    var inputData = {
      fullname: this.fullname,
      email: this.email,
      subject: this.subject,
      message: this.message
    }

    this.contactService.sendMessage(inputData).subscribe({
      next: (res: any) => {
        this.isLoading = false
        this.router.navigate(['/messages'])
      },
      error: (err: any) => {
        this.errors = err.error.errors
        this.isLoading = false
        console.log(err, 'errors')
      }
    })
  }

}
