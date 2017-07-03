using PDE.DataAccess;

namespace PDE.BusinessLogic
{
    public class UsuarioLogic : AbstractaLogic
    {
        UsuarioAdapter adapter = new UsuarioAdapter();

        public bool Login(string userName, string contrasena)
        {
            return adapter.Login(userName, contrasena);
        }
        
    }
}