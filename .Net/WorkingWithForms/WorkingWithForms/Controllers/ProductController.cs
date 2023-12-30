using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WorkingWithForms.Models;

namespace WorkingWithForms.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create([Bind(Exclude  = "ProductId, ProductName")]Product p1) // excluding the product id and peroduct and only accept teh value from this propertise 
        {
            return View();
        }

    }
}

