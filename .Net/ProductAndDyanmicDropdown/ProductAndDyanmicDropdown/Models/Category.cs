using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace ProductAndDyanmicDropdown.Models
{
    public class Category
    {
        [Key]
        public int Category_id { get; set; }
        public string Category_name { get; set; }
        public int Category_price { get; set; }
        public Int32? Product_id { get; set; }

       public virtual ICollection<Product> Products { get; set; }

    }
}