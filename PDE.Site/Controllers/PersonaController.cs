using PDE.BusinessLogic;
using PDE.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PDE.Site.Controllers
{
    public class PersonaController : BaseController<Persona>
    {
        public PersonaController()
        {
            this.Logic = new PersonaLogic();
        }
    }
}