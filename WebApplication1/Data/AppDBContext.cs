using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext (DbContextOptions<AppDBContext> options)
            : base(options)
        {
        }

        public DbSet<WebApplication1.Models.Loan> Loan { get; set; }
        public DbSet<WebApplication1.Models.Member> Member { get; set; }
        public DbSet<WebApplication1.Models.Book> Book { get; set; }
    }
}
