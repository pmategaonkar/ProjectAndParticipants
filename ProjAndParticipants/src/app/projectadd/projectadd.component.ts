import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/Project';

@Component({
  selector: 'app-projectadd',
  templateUrl: './projectadd.component.html',
  styleUrls: ['./projectadd.component.css']
})
export class ProjectaddComponent implements OnInit {

  public name: string;

  @Output()
  public newProjectCreated = new EventEmitter<Project>();

  constructor(public dialogRef: MatDialogRef<ProjectaddComponent>,
    private _projectService: ProjectService) { }

  ngOnInit() {
  }

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onSaveClick(): void {
    if (this.name) {
      this._projectService.create(this.name).subscribe((newProject) => {
        this.newProjectCreated.emit(newProject);
      });

    }
  }
}