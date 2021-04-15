using CognizantChallangeAPI.Model;
using CognizantChallangeAPI.ModelModel;
using Microsoft.AspNetCore.Mvc;

namespace CognizantChallangeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SolutionController : ControllerBase
    {
        private readonly CognizantChallangeContext db;

        public SolutionController(CognizantChallangeContext db) => this.db = db;

        [HttpGet]
        public JsonResult Get(int limit = 0) => new(db.TopSolutions(limit));

        [HttpPost]
        public JsonResult Post(PostSolution solution)
        {
            db.PostSolution(solution);
            return new JsonResult("Added Successfully");
        }
    }
}