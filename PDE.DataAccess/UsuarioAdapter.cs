using PDE.Entities;
using System.Linq;

namespace PDE.DataAccess
{
    public class UsuarioAdapter : AbstractaAdapter<Usuario>
    {
        public bool Login(string nombreUsuario, string contrasena)
        {
            var ret = false;

            using (var db = new PDEContext())
            {
                ret = db.Usuarios.Any(x => x.NombreUsuario == nombreUsuario && x.Contrasena == contrasena);
            }

            return ret;
        }
    }
}