using ASD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASD.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            Having h1 = new Having();
            List<Book> l1 = h1.books.ToList();
            return View(l1);
        }
    }
}