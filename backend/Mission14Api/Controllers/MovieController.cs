using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission14Api.Data;

namespace Mission14Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private MovieDbContext Context { get; set; }
        public MovieController(MovieDbContext temp)
        {
            Context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            var x = Context.Movies!.Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title).ToArray();
            return x;
        }
    }
}
