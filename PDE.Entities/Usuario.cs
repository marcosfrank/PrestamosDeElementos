using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PDE.Entities
{
    public class Usuario : AbstractaEntidad
    {
        public string NombreUsuario { get; set; }
        public string Contrasena { get; set; }
    }
}
