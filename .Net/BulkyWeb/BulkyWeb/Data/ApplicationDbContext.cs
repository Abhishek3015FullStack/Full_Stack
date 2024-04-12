using Microsoft.EntityFrameworkCore;
using BulkyWeb.Models;

namespace BulkyWeb.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Category> Categories { get; set; } //table should same 
        public DbSet<Product> Products1 { get; set; } //table name should be in the products
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(
                new Category() { Category_Id=1,Category_Name="Abhishek" ,Category_Description="Abhishek"}
            );
        }


    }
}
