using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using InsertDataInDatabase.Models;

namespace InsertDataInDatabase.Controllers
{
    public class productController : Controller
    {
        // GET: product
        public ActionResult AddProduct()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddProduct(Product p1)
        {
            ASDEntities1 a1 = new ASDEntities1();
            a1.Products.Add(p1);
            a1.SaveChanges();
            return View();
        }
    }
}