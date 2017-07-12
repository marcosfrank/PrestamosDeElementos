using PDE.BusinessLogic;
using PDE.Entities;

namespace PDE.Site.Controllers
{
    public class UsuarioController : BaseController<Usuario>
    {
        public UsuarioController()
        {
            Logic = new UsuarioLogic();
        }
    }
}