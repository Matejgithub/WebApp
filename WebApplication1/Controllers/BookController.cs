using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data.RepositoryClasses;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : BaseController<Book, BookRepository>
    {
        public BookController(BookRepository repository) : base(repository)
        {

        }
    }
}
