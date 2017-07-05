using PDE.DataAccess;
using PDE.Entities;

namespace PDE.BusinessLogic
{
    public class UsuarioLogic : AbstractaLogic<Usuario>
    {
        public UsuarioLogic()
        {
            Adapter = new UsuarioAdapter();
        }

        public bool Login(string userName, string contrasena)
        {
            return ((UsuarioAdapter)Adapter).Login(userName, contrasena);
        }
    }
}