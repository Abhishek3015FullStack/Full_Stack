using BulkyWeb.Data;
using Microsoft.AspNetCore.Mvc;
using BulkyWeb.Models;
using Newtonsoft.Json;
namespace BulkyWeb.Controllers
{
    public class CategoryController : Controller
    {
        private readonly ApplicationDbContext _db;

        public CategoryController(ApplicationDbContext db) 
        { 
            _db= db;
        }
        public IActionResult Index()
        {
            List<Category> objCategoryList = _db.Categories.ToList();
            String o = JsonConvert.SerializeObject(objCategoryList);
            Console.WriteLine(o);
            return View(objCategoryList);
        }
    }
}
