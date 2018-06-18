using Microsoft.EntityFrameworkCore;
using ProjAndParticipants.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjAndParticipants
{
  public class ProjectContactContext : DbContext
  {
    public ProjectContactContext(DbContextOptions options) : base(options)
    {

    }
    public ProjectContactContext()
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      //builder.Entity<ProjectContact>()
      //  .HasKey(pc => new { pc.ContactId, pc.ProjectId });

      //builder.Entity<ProjectContact>()
      //  .HasOne(pc => pc.Project)
      //  .WithMany(c => c.ProjectContacts)
      //  .HasForeignKey(pc => pc.ProjectId);

      //builder.Entity<ProjectContact>()
      // .HasOne(pc => pc.Contact)
      // .WithMany(p => p.ProjectContacts)
      // .HasForeignKey(pc => pc.ContactId);
    }

    public DbSet<Project> Projects { get; set; }
    public DbSet<Contact> Contacts { get; set; }
    public DbSet<ProjectContact> ProjectContacts { get; set; }
  }
}
