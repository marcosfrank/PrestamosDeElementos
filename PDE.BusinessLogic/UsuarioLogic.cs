using PDE.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
