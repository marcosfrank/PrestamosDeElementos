using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PDE.Entities
{
    public class Elemento : AbstractaEntidad
    {
        public virtual Categoria Categoria { get; set; }
        public long IdCategoria { get; set; }
    }
}
