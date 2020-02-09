using WebApplication1.Models;

namespace WebApplication1.Data.RepositoryClasses
{
    public class BookRepository : EfCoreRepository<Book, AppDBContext>
    {
        public BookRepository(AppDBContext context) : base(context)
        {

        }
        // We can add new methods specific to the this repository here in the future
    }
}

