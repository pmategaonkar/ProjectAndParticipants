using Microsoft.AspNetCore.Mvc;
using ProjAndParticipants.Entities;
using ProjAndParticipants.Responses;
using System.Collections.Generic;
using System.Linq;

namespace ProjAndParticipants
{
  [Route("api/[controller]")]
  public class ContactsController : Controller
  {
    private ProjectContactContext _db;

    public ContactsController(ProjectContactContext context)
    {
      _db = context;
    }


    [HttpGet]
    public List<ContactResponse> Get()
    {
      GetContactsResponse getContactsResponse = new GetContactsResponse();
      getContactsResponse.Map(_db.Contacts.ToList());
      return getContactsResponse.Contacts;
    }

    [HttpPost]
    public ContactResponse Post([FromBody]Contact contact)
    {
      if (contact != null)
      {
        _db.Contacts.Add(contact);
        _db.SaveChanges();
      }
      return new ContactResponse()
      {
        Id = contact.Id,
        FirstName = contact.FirstName,
        LastName = contact.LastName,
        Email = contact.Email,
        Address = contact.Address
      };
    }

  }
}
