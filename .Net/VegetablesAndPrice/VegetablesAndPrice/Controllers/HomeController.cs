using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VegetablesAndPrice.Models;

namespace VegetablesAndPrice.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            Dbcontext1 as1 = new Dbcontext1();
            List<Vegies> l1 =as1.vegies1.ToList();

            return View(l1);
        }
    }
}