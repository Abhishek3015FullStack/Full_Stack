using System;
using System.Collections.Generic;

using System.Linq;
using System.Web;
using System.Web.Mvc;
using ProductAndDyanmicDropdown.Models;
using System.Data.SqlClient;

namespace ProductAndDyanmicDropdown.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {

            ContextAndA a1 = new ContextAndA();
            List<Product> lq = a1.Products.ToList();
            return View(lq);
        }

        public ActionResult InsertData()
        {
            ContextAndA a1 = new ContextAndA();
            ViewBag.category = a1.Categorys.ToList();
                
            return View();
        }
        [HttpPost]
        public ActionResult InsertData(Product p1)
        {
            ContextAndA db = new ContextAndA();
            var Product_id1 = p1.Product_id;
            var product_name1 = p1.Product_name;
            var product_price1 = p1.Product_price;

            var category_id1 = p1.Category_id;

            if (category_id1 != null && category_id1 != ' ' && category_id1 != 0)
            {
                SqlParameter[] sqlParameters = new SqlParameter[]
               {
                   //new SqlParameter("@BrandID", 2)
                   //you can add more parameters here

                    new SqlParameter("@Product_id", Product_id1),
                    new SqlParameter("@product_name",product_name1),
                    new SqlParameter("@Product_price",product_price1),
                    new SqlParameter("@Category_id",category_id1)

               };

                db.Database.ExecuteSqlCommand("exec sp_insert @Product_id, @product_name, @Product_price, @Category_id", sqlParameters);
            }
            else
            {

            }
            return View();
        }
        public ActionResult ProductById(Product p1)
        {
            ContextAndA db = new ContextAndA();
            var Product_id1 = p1.Product_id;
            var product_name1 = p1.Product_name;
            var product_price1 = p1.Product_price;
            var category_id1 = p1.Category_id;
            var pid1 = p1.Pid;
            SqlParameter[] sqlParameters = new SqlParameter[]
            {
                //new SqlParameter("@BrandID", 2)
                //you can add more parameters here

                new SqlParameter("@Pid", pid1),

            };
            Product product = db.Database.SqlQuery<Product>("exec GetProductById @Pid", sqlParameters).FirstOrDefault();
            return View(product);
        }

        public ActionResult updateRecord(Product p1)
        {
            ContextAndA db = new ContextAndA();
            var Product_id1 = p1.Product_id;
            var product_name1 = p1.Product_name;
            var product_price1 = p1.Product_price;

            var category_id1 = p1.Category_id;
            var pid1 = p1.Pid;

            if (category_id1 != null && category_id1 != ' ' && category_id1 != 0)
            {
                SqlParameter[] sqlParameters = new SqlParameter[]
                {
                //new SqlParameter("@BrandID", 2)
                //you can add more parameters here

                new SqlParameter("@Product_id", Product_id1),
                new SqlParameter("@product_name",product_name1),
                new SqlParameter("@Product_price",product_price1),
                new SqlParameter("@Category_id",category_id1),
                new SqlParameter("@Pid",pid1)
                };
                db.Database.ExecuteSqlCommand("exec UpdateRecord @Product_id, @product_name, @Product_price, @Category_id,@Pid", sqlParameters);

            }
            return RedirectToAction("index");

        }
        public ActionResult deleteRecords(int pid)
        {
            ContextAndA db = new ContextAndA();

            SqlParameter[] sqlParameters = new SqlParameter[]
            {
                //new SqlParameter("@BrandID", 2)
                //you can add more parameters here

              
                new SqlParameter("@Pid",pid)
            };
            db.Database.ExecuteSqlCommand("exec DeleteRecords @Pid", sqlParameters);


            return RedirectToAction("index");
        }
        public ActionResult Category()
        {
            ContextAndA db = new ContextAndA();
            List<Category>ca = db.Categorys.ToList();
            return View(ca);
        }

        public ActionResult Joins1()
        {
            ContextAndA db = new ContextAndA();
           
            return View();
        }
    }
}