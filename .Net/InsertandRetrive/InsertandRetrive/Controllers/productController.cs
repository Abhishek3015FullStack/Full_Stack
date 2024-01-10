using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using InsertandRetrive.Models;

namespace InsertandRetrive.Controllers
{
    public class productController : Controller
    {
        public ActionResult add()
        {

            return View();
        }

        [HttpPost]
        public ActionResult add(Product p1)
        {
            DbContext1 a1 = new DbContext1();
            a1.product.Add(p1);
            a1.SaveChanges();


            return View();
        }
    }
}