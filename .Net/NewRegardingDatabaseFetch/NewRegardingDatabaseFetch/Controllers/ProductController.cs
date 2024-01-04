using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NewRegardingDatabaseFetch.Models;

namespace NewRegardingDatabaseFetch.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            AbhishekEntities1 db = new AbhishekEntities1();
            List<Product> l1 =db.Products.ToList();
            return View(l1);
        }
    }
}