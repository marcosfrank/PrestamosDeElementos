using System;

namespace PDE.Entities
{
    public abstract class AbstractaEntidad
    {
        public long Id { get; set; }
        public virtual string Descripcion { get; set; }

        public DateTime FechaCreacion { get; set; }

        public AbstractaEntidad()
        {
            FechaCreacion = DateTime.Now;
        }
    }
}