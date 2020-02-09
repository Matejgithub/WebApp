using WebApplication1.Models;

namespace WebApplication1.Data.RepositoryClasses
{
    public class MemberRepository : EfCoreRepository<Member, AppDBContext>
    {
        public MemberRepository(AppDBContext context) : base(context)
        {

        }
    }

}
