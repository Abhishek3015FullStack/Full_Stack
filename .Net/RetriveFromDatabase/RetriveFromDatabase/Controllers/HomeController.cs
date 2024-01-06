using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RetriveFromDatabase.Models;
namespace RetriveFromDatabase.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index(String search ="")
        {
            ASDEntities4 db = new ASDEntities4();
            ViewBag.search = search;
            List<Product> l1;
            if (search == "")
            {
                l1 = db.Products.ToList();
            }
            else
            {
                l1 = db.Products.Where(temp => temp.productId.Equals(search)).ToList();
            }

            return View(l1);
        }
       

        public ActionResult Index1()
        {
            ASDEntities5 ad = new ASDEntities5();
            List<Brand> ad1 = ad.Brands.ToList();
            return View(ad1);
        }

        public ActionResult details(int id)
        {
            Product l1;
            String ID1 = id.ToString();

            ASDEntities4 db = new ASDEntities4();
            if (id == null)
            {
                l1 = null;
            }
            else
            {
                 l1 = db.Products.FirstOrDefault(temp => temp.productId.Equals(id.ToString()));
            }
            
            return View(l1);
        }




    }
}