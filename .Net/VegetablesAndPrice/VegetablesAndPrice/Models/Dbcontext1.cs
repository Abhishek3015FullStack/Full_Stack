using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
namespace VegetablesAndPrice.Models
{
    public class Dbcontext1 : DbContext
    {
        public Dbcontext1() : base("AmbeMata")
        { 
        }
        public DbSet<Vegies> vegies1 { get; set; }
    }
}