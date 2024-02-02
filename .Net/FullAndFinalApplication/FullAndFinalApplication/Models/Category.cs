using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace FullAndFinalApplication.Models
{
    public class Category
    {

       
        [Key]
        public int Category_id { get; set; }
        public string Category_name { get; set; }
        public int Category_price { get; set; }

       public virtual ICollection<Product> Products { get; set; }
        
    }
}