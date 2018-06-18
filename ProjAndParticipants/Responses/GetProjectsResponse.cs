using ProjAndParticipants.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ProjAndParticipants.Responses
{
  public class GetProjectsResponse
  {
    public List<ProjectResponse> Projects { get; set; }

    public void Map(List<Project> projects, ProjectContactContext db)
    {
      if (Projects == null)
        Projects = new List<ProjectResponse>();
      foreach (var project in projects)
      {
        var projectResponse = new ProjectResponse()
        {
          Id = project.Id,
          Name = project.Name,
          Contacts = new List<ContactResponse>()
        };

        var projectContacts = db.ProjectContacts.Include(pc => pc.Contact).Where(pc => pc.ProjectId == project.Id).ToList();

        if (projectContacts != null){
          foreach (var projectContact in projectContacts)
          {
            projectResponse.Contacts.Add(new ContactResponse()
            {
              Id = projectContact.ContactId,
              FirstName = projectContact.Contact.FirstName,
              LastName = projectContact.Contact.LastName,
              Email = projectContact.Contact.Email,
              Address = projectContact.Contact.Address
            });
          }
        }
        Projects.Add(projectResponse);
      }
    }
  }
  public class ProjectResponse
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public List<ContactResponse> Contacts { get; set; }
  }
}
