using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PracticeDatabase.Models;

namespace PracticeDatabase.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            AbhishekEntities a1 = new AbhishekEntities();
            List<Product> l1 = a1.Products.ToList();
            return View(l1);
        }
    }
}