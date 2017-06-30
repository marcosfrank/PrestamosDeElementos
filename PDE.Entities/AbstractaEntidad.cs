using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PDE.Entities
{
    public abstract class AbstractaEntidad
    {
        public long Id { get; set; }
        public virtual string Descripcion { get; set; }

        public DateTime FechaCreacion { get; set; }
    }
}
