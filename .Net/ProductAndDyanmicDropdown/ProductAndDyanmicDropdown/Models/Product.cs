using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace ProductAndDyanmicDropdown.Models
{
    public class Product
    {
        [Key]
        public int Product_id { get; set; }
        public string Product_name { get; set; }
        public int Product_price { get; set; }
        public int Category_id { get; set; }
        public int Pid { get; set; }
        public virtual Category cat { set; get; }
    }
}