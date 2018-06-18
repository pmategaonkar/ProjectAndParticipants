import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/Contact';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Inject } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-addcontacttoproject',
  templateUrl: './addcontacttoproject.component.html',
  styleUrls: ['./addcontacttoproject.component.css']
})
export class AddcontacttoprojectComponent implements OnInit {

  public contacts: Array<Contact>;
  public project: Project;
  public addContactToProjectForm: FormGroup;
  public selectedContact: Contact;

  @Output()
  public newProjectContactCreated = new EventEmitter();

  constructor(private dialogRef: MatDialogRef<AddcontacttoprojectComponent>,
    private _contactService: ContactService,
    private _projectService: ProjectService,
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.contacts = new Array<Contact>();
    this.project = data.project;
  }

  ngOnInit() {
    this.createForm();
    this.loadContacts();
  }

  get f() { return this.addContactToProjectForm; }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onSaveClick(): void {
    if (this.addContactToProjectForm.controls.selectedContact.value != null) {
      this._projectService.assignContactToProject(this.project.id, this.addContactToProjectForm.controls.selectedContact.value).subscribe(assignContactToProjectResponse => {
        this.newProjectContactCreated.emit();
        this.dialogRef.close();
      });
    }
  }

  private createForm(): any {
    this.addContactToProjectForm = this._fb.group({
      selectedContact: [''],
      projectName: this.project.name
    });
  }
  
  private loadContacts(): void {
    this._contactService.getContacts().subscribe(contactsResponse => {
      if (contactsResponse != undefined) {
        this.contacts = contactsResponse;
      }
    });
  }

}
