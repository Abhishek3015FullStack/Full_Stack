using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Model.Models;
namespace Model.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            List<Products> productsList = new List<Products>()
            {
                new Products(){ ProductId = 1, ProductName="Abhishek 1" ,ProductPrice = 12.35f},
                new Products(){ ProductId = 2, ProductName="Abhishek 2" ,ProductPrice = 12.35f},
                new Products(){ ProductId = 3, ProductName="Abhishek 3" ,ProductPrice = 12.35f}

            };
            return View(productsList);
        }
        public ActionResult Details(int id)
        {
            List<Products> ProductList = new List<Products>()
            {
                new Products(){ ProductId = 1, ProductName="Abhishek 1" ,ProductPrice = 12.35f},
                new Products(){ ProductId = 2, ProductName="Abhishek 2" ,ProductPrice = 12.35f},
                new Products(){ ProductId = 3, ProductName="Abhishek 3" ,ProductPrice = 12.35f}
            };
            Products b = null;
            foreach (var a in ProductList)
            {
                if (a.ProductId == id)
                {
                    b = a;
                }
            }
            return View(b);
        }
    }
}