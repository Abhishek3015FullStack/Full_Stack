using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ShowingTheProductByUsingModel.Models;

namespace ShowingTheProductByUsingModel.Controllers
{
    public class ItemsController : Controller
    {
        // GET: Items
        public ActionResult Index()
        {
            List<Items> items1 = new List<Items>()
            {
                new Items(){ItemsId=1, ItemsName="Abhishek1",ItemsPrice=5251},
                new Items(){ItemsId=2, ItemsName="Abhishek2",ItemsPrice=5252},
                new Items(){ItemsId=3, ItemsName="Abhishek3",ItemsPrice=5253}

            };
           
            return View(items1);
        }
        public ActionResult Details(int id)
        {
            List<Items> Products = new List<Items>()
            {
                new Items(){ItemsId=1,ItemsName="Abhishek1",ItemsPrice=5251},
                new Items(){ItemsId=1,ItemsName="Abhishek1",ItemsPrice=5252},
                new Items(){ItemsId=1,ItemsName="Abhishek1",ItemsPrice=5253}
            };
            Items matchingProduct = null;
            foreach (var a in Products)
            {
                if (a.ItemsId == id)
                {
                    matchingProduct = a;
                }
            }
           
            return View(matchingProduct);
        }
    }
}