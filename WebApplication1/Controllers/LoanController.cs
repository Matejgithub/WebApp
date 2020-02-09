using Microsoft.AspNetCore.Mvc;
using WebApplication1.Controllers;
using WebApplication1.Data.RepositoryClasses;
using WebApplication1.Models;

namespace MyMDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : BaseController<Loan, LoanRepository>
    {
        public LoanController(LoanRepository repository) : base(repository)
        {

        }
    }
}