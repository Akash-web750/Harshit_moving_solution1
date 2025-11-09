import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactForm {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = '/api/contact'; // Adjust this to your Flask API endpoint

  constructor(private http: HttpClient) { }

  sendContactForm(formData: ContactForm): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}