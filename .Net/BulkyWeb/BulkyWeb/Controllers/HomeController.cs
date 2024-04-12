using BulkyWeb.Data;
using BulkyWeb.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Newtonsoft.Json;

namespace BulkyWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _db;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger , ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }
       

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult PrivacyOne()
        {
            return View("Privacy1");
        }
        [HttpGet]
        public IActionResult CreatePage()
        {
            return View();


        }
        [HttpPost]
        public IActionResult CreatePage(Category obj)
        {

            if (obj.Category_Name.Equals(obj.Category_Description))
            {
                ModelState.AddModelError("Category_Name", "Both are same");
            }
            if (ModelState.IsValid)
            {
                _db.Categories.Add(obj);
                _db.SaveChanges();
                TempData["Success"] = "The Item is Created Successfully";
                return RedirectToAction("Index", "Category");
            }
            
            return View();

        }


        public IActionResult Edit(int? id)
        {
            if (id == null && id == 0)
            {
                return NotFound();

            }
            Category ca1 = _db.Categories.Find(id);
            if (ca1 == null)
            {
                return NotFound();
            }
                return View(ca1);
        }
        [HttpPost]
        public IActionResult Edit(Category obj)
        {
                
            if (obj.Category_Name.Equals(obj.Category_Description))
            {
                ModelState.AddModelError("Category_Name", "Both are same");
            }
            if (ModelState.IsValid)
            {
                _db.Categories.Update(obj);
                _db.SaveChanges();
                TempData["Success"] = "The Item is edited Successfully";
                return RedirectToAction("Index", "Category");
            }

            return View("Index","Category");

        }

        public IActionResult Delete(int?id)
        {
            var obj = _db.Categories.Find(id);
            if (obj == null && id == 0)
            {
                return NotFound();
            }
            else
            {
                _db.Categories.Remove(obj);
                TempData["Success"] = "The Item is deleted Successfully";
                _db.SaveChanges();
            }

            return RedirectToAction("Index", "Category");
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
