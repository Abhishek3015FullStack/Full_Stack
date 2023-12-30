using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc; // add this package 

namespace CustomBinder.Models
{
    public class CustomBinder1 : IModelBinder //i model binder
    {
        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            int StudentID1 = Convert.ToInt32(controllerContext.HttpContext.Request.Form["StudentId"]);
            String StudentName = controllerContext.HttpContext.Request.Form["StudentName"];
            String Landmark = controllerContext.HttpContext.Request.Form["Landmark"];
            String Postcode = controllerContext.HttpContext.Request.Form["Postcode"];
            String Contact = controllerContext.HttpContext.Request.Form["Contact"];

            return new Student() { StudentId = StudentID1, StudentName = StudentName, Address = Landmark + ' ' + Postcode + ' ' + Contact }; // binder and Student object 

        }
    }
}