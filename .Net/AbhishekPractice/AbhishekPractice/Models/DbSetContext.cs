using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;


namespace AbhishekPractice.Models
{
    public class DbSetContextVC:DbContext
    {
        public DbSetContextVC():base("AmbeMata")
        { 
        }
        public DbSet<Book> books { get; set; }
    }
}