using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using InsertDataInDatabase.Models;
namespace InsertDataInDatabase.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            ASDEntities1 a1 = new ASDEntities1();
            List<Product> l1 = a1.Products.ToList();
            return View(l1);
        }

    }
}