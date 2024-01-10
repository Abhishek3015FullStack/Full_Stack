using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using InsertandRetrive.Models;

namespace InsertandRetrive.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            DbContext1 a1 = new DbContext1();
            List<Product> l1 = a1.product.ToList();
            return View(l1);
        }
    }
}