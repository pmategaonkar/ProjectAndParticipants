using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjAndParticipants.Entities
{
  public class ProjectContact
  {
    public int Id { get; set; }
    public int ProjectId { get; set; }
    public virtual Project Project { get; set; }
    public int ContactId { get; set; }
    public virtual Contact Contact { get; set; }
  }
}
