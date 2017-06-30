using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PDE.Entities
{
    public class Persona : AbstractaEntidad
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }

        public override string Descripcion
        {
            get
            {
                return Nombre + " " + Apellido;
            }
        }
    }
}
