import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProjectService } from '../services/project.service';
import { ProjectaddComponent } from '../projectadd/projectadd.component';
import { Project } from '../models/Project';
import { Contact } from '../models/Contact';
import { MatTableDataSource } from '@angular/material/table';
import { AddcontacttoprojectComponent } from 'src/app/addcontacttoproject/addcontacttoproject.component';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  constructor(private _projectService: ProjectService,
    public _dialog: MatDialog) { }

  public tableDs: MatTableDataSource<Project>;
  public displayedColumns = ['id', 'name', 'contacts', 'actions'];

  ngOnInit() {
    this.tableDs = new MatTableDataSource<Project>();
    this.loadData();
  }

  public openCreateProject(): void {
    const dialogRef =
      this._dialog.open(ProjectaddComponent, {
        width: '400px',
        height: '250px'
      });

    const addProjectComponent = dialogRef.componentInstance as ProjectaddComponent;
    addProjectComponent.newProjectCreated.subscribe((newProject) => {
      this.loadData();
    }); 
  }

  public onAddContactToProjectClick(project: Project): void {
    const dialogRef =
      this._dialog.open(AddcontacttoprojectComponent, {
        width: '450px',
        height: '300px',
        data: {
          project: project
        }
      });

    const addContactToProjComponent = dialogRef.componentInstance as AddcontacttoprojectComponent;
    addContactToProjComponent.newProjectContactCreated.subscribe(() => {
      this.loadData();
    });
  }

  private loadData(): void {
    this._projectService.getProjects().subscribe(projects => {
      this.tableDs.data = projects;
    });
  }

}
