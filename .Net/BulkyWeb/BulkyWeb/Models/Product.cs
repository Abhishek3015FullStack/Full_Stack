using Microsoft.Identity.Client;
using System.ComponentModel.DataAnnotations;
namespace BulkyWeb.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        [Required(ErrorMessage = "This is the required Field Product_name ")]
        [MaxLength (30, ErrorMessage ="The length Should be cannot add more than that the 30")]
        [MinLength (3, ErrorMessage ="The length should greater than 3")]
        public string Product_name { get; set; }
        
        public double Product_Price { get; set; } 

    }
}
