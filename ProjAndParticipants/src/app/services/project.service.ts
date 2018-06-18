import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/Project';
import { Contact } from '../models/Contact';

@Injectable()
export class ProjectService {

  constructor(private _http: HttpClient) {
   
  }

  getProjects(): Observable<Array<Project>> {
    return this._http.get<Array<Project>>("/api/Projects");
  }

  create(name: string): Observable<Project> {
    var newProject: Project = new Project();
    newProject.name = name;
    return this._http.post<Project>("/api/projects", newProject);
  }

  assignContactToProject(projectId: number, contactId: number):Observable<void> {
    return this._http.get<void>("/api/ProjectContacts?projectId="+projectId+"&contactId="+contactId);
  }
}
