using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace ProductAndDyanmicDropdown.Models
{
    public class ContextAndA:DbContext
    {
        public ContextAndA() : base("Connection")
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categorys { get; set; }
    }
}