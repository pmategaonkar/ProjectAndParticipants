import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/Project';
import { Contact } from '../models/Contact';

@Injectable()
export class ContactService {

  constructor(private _http: HttpClient) {

  }

  getContacts(): Observable<Array<Contact>> {
    return this._http.get<Array<Contact>>("/api/contacts");
    
  }

  create(contact: Contact): Observable<Contact> {
    return this._http.post<Contact>("/api/contacts", contact);
  }

}
