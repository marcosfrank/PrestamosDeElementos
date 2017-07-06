using PDE.BusinessLogic;
using PDE.Entities;

namespace PDE.Site.API.Controllers
{
    public class CategoriaController : BaseController<Categoria>
    {
        public CategoriaController()
        {
            Logic = new CategoriaLogic();
        }
    }
}