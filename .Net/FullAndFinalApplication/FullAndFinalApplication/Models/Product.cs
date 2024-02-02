using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;


namespace FullAndFinalApplication.Models
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