using ProjAndParticipants.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjAndParticipants.Responses
{
  public class GetContactsResponse
  {
    public List<ContactResponse> Contacts { get; set; }

    public void Map(List<Contact> contacts)
    {
      if (Contacts == null)
        Contacts = new List<ContactResponse>();
      foreach (var contact in contacts)
      {
        Contacts.Add(new ContactResponse()
        {
          Id = contact.Id,
          FirstName = contact.FirstName,
          LastName = contact.LastName,
          Email = contact.Email,
          Address = contact.Address
        });
      }
    }
  }

  public class ContactResponse
  {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }
  }
}
