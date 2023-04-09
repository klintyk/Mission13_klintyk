using Microsoft.AspNetCore.Mvc;
using Mission14Api.Data;

namespace Mission14Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private MovieDbContext Context { get; set; }
        public MoviesController(MovieDbContext temp)
        {
            Context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            var x = Context.Movies!
                .Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();
            return x;
        }
    }
}
