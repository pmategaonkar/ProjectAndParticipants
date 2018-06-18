import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Contact } from 'src/app/models/Contact';
import { ContactaddComponent } from '../contactadd/contactadd.component';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  constructor(private _contactService: ContactService,
    public _dialog: MatDialog) { }

  public tableDs: MatTableDataSource<Contact>;
  public displayedColumns = ['id', 'firstName', 'lastName', 'email', 'address'];

  ngOnInit() {
    this.tableDs = new MatTableDataSource<Contact>();
    this.loadData();
  }

  public openCreateContact(): void {

    const dialogRef =
      this._dialog.open(ContactaddComponent, {
        width: '600px',
        height: '450px'
      });

    const addContactComponent = dialogRef.componentInstance as ContactaddComponent;
    addContactComponent.newContactCreated.subscribe((newContact) => {
      this.loadData();
    });
  }

  private loadData(): void {
    this._contactService.getContacts().subscribe(contacts => {
      this.tableDs.data = contacts;
    });
  }

}
