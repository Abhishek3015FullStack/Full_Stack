﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
namespace VegetablesAndPrice.Models
{
    public class Vegies
    {
        public int id { get; set; }
        public String name { get; set; }

        public int price { get; set; }
    }
}