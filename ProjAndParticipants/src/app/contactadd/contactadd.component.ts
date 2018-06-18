import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Contact } from 'src/app/models/Contact';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-contactadd',
  templateUrl: './contactadd.component.html',
  styleUrls: ['./contactadd.component.css']
})
export class ContactaddComponent implements OnInit {

  public contactForm: FormGroup;
  public submitted: boolean = false;

  @Output()
  public newContactCreated = new EventEmitter<Contact>();

  constructor(private _contactService: ContactService,
    public dialogRef: MatDialogRef<ContactaddComponent>,
    private _fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.submitted = false;
  }

  get f() { return this.contactForm; }

  private createForm(): any {
    this.contactForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onSaveClick(): void {
    this.submitted = true;

    if (this.contactForm.invalid == true) {
      return;
    }

    const newContact: Contact = new Contact();
    newContact.address = this.contactForm.controls["address"].value;
    newContact.firstName = this.contactForm.controls["firstName"].value;
    newContact.lastName = this.contactForm.controls["lastName"].value;
    newContact.email = this.contactForm.controls["email"].value;

    this.
      _contactService.
      create(newContact).
      subscribe(newContact => {
        this.newContactCreated.emit(newContact);
        this.dialogRef.close();
    });

  }
}
