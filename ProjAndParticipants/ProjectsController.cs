using Microsoft.AspNetCore.Mvc;
using ProjAndParticipants.Entities;
using ProjAndParticipants.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace ProjAndParticipants
{
  [Route("api/[controller]")]
  public class ProjectsController : Controller
  {
    private ProjectContactContext _db;

    public ProjectsController(ProjectContactContext context)
    {
      _db = context;
    }

    [HttpGet]
    public List<ProjectResponse> Get()
    {
      GetProjectsResponse getProjectResponse = new GetProjectsResponse();
      getProjectResponse.Map(_db.Projects.ToList(), _db);
      return getProjectResponse.Projects; 
    }

    [HttpPost]
    public ProjectResponse Post([FromBody]Project project)
    {
      if (project != null)
      {
        _db.Projects.Add(project);
        _db.SaveChanges();
      }

      return new ProjectResponse()
      {
        Id = project.Id,
        Name = project.Name
      };
    }

  }
}
