import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService, ContactForm } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  sendContactForm() {
    if (this.contactForm.valid) {
      const formData: ContactForm = this.contactForm.value;
      this.contactService.sendContactForm(formData).subscribe(
        (response: any) => {
          console.log('Form submitted successfully', response);
          alert('Your message has been sent successfully!');
          this.contactForm.reset();
        },
        (error: any) => {
          console.error('Error submitting form', error);
          alert('There was an error sending your message. Please try again later.');
        }
      );
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}