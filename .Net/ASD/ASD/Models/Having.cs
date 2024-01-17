using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace ASD.Models
{
    public class Having:DbContext
    {
        public Having():base("AmbeMata")
        { 

        }
        public DbSet<Book> books { get; set; }
    }
}