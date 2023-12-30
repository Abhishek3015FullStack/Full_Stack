using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CustomBinder.Models;


namespace CustomBinder.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index([ModelBinder(typeof(CustomBinder1))] Student s1) //this is the custom class  this needs a practice 
        {
            return View();
        }


    }
}