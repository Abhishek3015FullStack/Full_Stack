using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace CustomBindingButExample.Models
{
    public class Customisation : IModelBinder
    {
        
        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            int id =Convert.ToInt32(controllerContext.HttpContext.Request.Form["StudentID"]);
            String Name = controllerContext.HttpContext.Request.Form["StudentName"];
            String PostalCode = controllerContext.HttpContext.Request.Form["PostalCode"];
            String Contact = controllerContext.HttpContext.Request.Form["Contact"];

            return new Student() { StudentID= id, StudentName  = Name, Address= PostalCode+ ' ' + Contact };



        }
    }
}