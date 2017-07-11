using PDE.BusinessLogic;
using PDE.Entities;

namespace PDE.Site.Controllers
{
    public class ElementoController : BaseController<Elemento>
    {
        public ElementoController()
        {
            this.Logic = new ElementoLogic();
        }
    }
}