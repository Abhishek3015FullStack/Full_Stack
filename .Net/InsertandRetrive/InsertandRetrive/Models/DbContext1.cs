using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity; 

namespace InsertandRetrive.Models
{
    
    public class DbContext1:DbContext
    {
        public DbContext1():base("AmbeMata")
        { 
        }
        public DbSet<Product> product { get; set; }
    }
}