using Microsoft.AspNetCore.Mvc;
using BulkyWeb.Models;
using BulkyWeb.Data;
using Microsoft.Identity.Client;

namespace BulkyWeb.Controllers
{
    public class ProductController : Controller
    {
        ApplicationDbContext _db;
        public ProductController(ApplicationDbContext db)
        {
            _db = db;
        }
        public IActionResult Index()
        {
            List<Product> products = _db.Products1.ToList();   
            return View(products);
        }
        public IActionResult Edit(int?id)
        {
            
            if (id == null || id == 0)
            {
                return NotFound();
            }
            Product p1 = _db.Products1.Find(id);
           if(p1==null)
            {
                return NotFound();            
            }
            return View(p1);
        }

        [HttpPost]
        public IActionResult Edit(Product p1)
        {

            if (p1.ProductId == null || p1.ProductId==0)
            { 
                return NotFound();
            }
            _db.Products1.Update(p1);
            _db.SaveChanges();
            return RedirectToAction("index");
        }



        public IActionResult Delete(int? id)
        {
            if (id == null || id == 0)
            { 
                return NotFound();
            }
            Product p1 = _db.Products1.Find(id);
            _db.Products1.Remove(p1);
            _db.SaveChanges();
            return RedirectToAction("index");
        }


        public IActionResult Create(Product p1)
        {

            return View();
        }

    }
}
