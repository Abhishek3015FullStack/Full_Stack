using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace InsertandRetrive.Models
{
    public class Product
    {
        [Key]
        public int id{ get; set; }
        public String name { get; set; }
        
        public int price { get; set; }

    }
}