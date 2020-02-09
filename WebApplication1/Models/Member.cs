using System;
using WebApplication1.Data;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class Member : IEntity
    {
        public int Id { get; set; }

        [Required]
        [StringLength(30, MinimumLength = 2)]
        public string Name { get; set; }

        [Required]
        [StringLength(30, MinimumLength = 2)]
        public string Surname { get; set; }

    }
}
