using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PDE.DataAccess
{
    public class UsuarioAdapter : Adapter
    {
        public Boolean Login(string nombreUsuario, string contrasena)
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
