//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace InsertDataInDatabase.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Product
    {
        public string productId { get; set; }
        public string productName { get; set; }
        public Nullable<int> productPrice { get; set; }
        public string Active { get; set; }
        public string Type { get; set; }
        public Nullable<System.DateTime> date { get; set; }
    }
}