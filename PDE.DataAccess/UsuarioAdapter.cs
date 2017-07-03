using System.Linq;

namespace PDE.DataAccess
{
    public class UsuarioAdapter : Adapter
    {
        public bool Login(string nombreUsuario, string contrasena)
        {
            bool ret = false;

            using (var db = new PDEContext())
            {
                db.Usuarios.Count(x=> x.NombreUsuario == nombreUsuario && x.Contrasena == contrasena);
            }

            return ret;
        }
    }
}