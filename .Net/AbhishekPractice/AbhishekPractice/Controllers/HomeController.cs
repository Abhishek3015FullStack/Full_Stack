using AbhishekPractice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace AbhishekPractice.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            DbSetContextVC db1 = new DbSetContextVC();
            List<Book>l1 = db1.books.ToList();

            return View(l1);
        }
    }
}