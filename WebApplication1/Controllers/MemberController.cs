using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data.RepositoryClasses;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : BaseController<Member, MemberRepository>
    {
        public MemberController(MemberRepository repository) : base(repository)
        {

        }
    }
}
