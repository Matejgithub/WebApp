using System;
using System.ComponentModel.DataAnnotations;
using WebApplication1.Data;

namespace WebApplication1.Models
{
    public class Loan : IEntity
    {
        public int Id { get; set; }

        [Required]
        public int IDBook { get; set; }

        [Required]
        public int IDMember { get; set; }

        [DataType(DataType.Date)]
        public DateTime LoanDate { get; set; }

    }
}
