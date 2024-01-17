using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
namespace ASD.Models
{
    public class Book
    {
        public int id { get; set; }
        public String names { get; set; }
        public int price { get; set; }
        public String produced { get; set; }
    }
}