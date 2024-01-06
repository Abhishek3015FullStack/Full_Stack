using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CustomBindingButExample.Models;
using CustomBindingButExample.Models;

namespace CustomBindingButExample.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Index1([ModelBinder(typeof(Customisation))] Student s1) //square bracket Must 
        {

            return View(s1);
        }
    }
}