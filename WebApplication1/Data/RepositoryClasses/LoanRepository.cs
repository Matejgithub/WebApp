using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Data.RepositoryClasses
{
    public class LoanRepository : EfCoreRepository<Loan, AppDBContext>
    {
        public LoanRepository(AppDBContext context) : base(context)
        {

        }
        // We can add new methods specific to the movie repository here in the future
    }
}
