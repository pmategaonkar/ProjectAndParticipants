using Microsoft.AspNetCore.Mvc;
using ProjAndParticipants.Entities;
using ProjAndParticipants.Responses;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjAndParticipants
{
  [Route("api/[controller]")]
  public class ProjectContactsController : Controller
  {
    private ProjectContactContext _db;

    public ProjectContactsController(ProjectContactContext context)
    {
      _db = context;
    }



    [HttpGet]
    public void Get([FromQuery]int projectId, [FromQuery] int contactId)
    {

      var project = _db.Projects.Where(p => p.Id == projectId).SingleOrDefault();
      var contact = _db.Contacts.Where(c => c.Id == contactId).SingleOrDefault();
      bool existingProjectContact = _db.ProjectContacts.Any(pc => pc.ContactId == contactId && pc.ProjectId == projectId);
      if (project == null || contact == null || existingProjectContact)
      {
        throw new ValidationException("Incorrect input");
      }
      var projectContact = new ProjectContact()
      {
        ProjectId = projectId,
        ContactId = contactId
      };
      _db.ProjectContacts.Add(projectContact);
      _db.SaveChanges();


    }

  }
}
