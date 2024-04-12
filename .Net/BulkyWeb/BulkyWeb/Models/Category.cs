using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Globalization; 


namespace BulkyWeb.Models
{
    public class Category
    {
        [Key]
        [DisplayName("Category")]
        public int Category_Id { get; set; }

        [Required(ErrorMessage = "This is required field")]
        [MaxLength(10, ErrorMessage ="The max length should be less  than 10")]
        [DisplayName("Category Name")]
        public String Category_Name { get; set;}

        [Required(ErrorMessage = "This is required field Category Description")]
        [DisplayName("Category Description")]
        public String Category_Description { get; set;}
    }
    
}
