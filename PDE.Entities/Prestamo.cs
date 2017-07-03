using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace PDE.Entities
{
    [Table("Prestamos")]
    public class Prestamo : AbstractaEntidad
    {
        public DateTime Fecha { get; set; }
        public virtual Elemento Elemento { get; set; }
        public long ElementoId { get; set; }
        public virtual Persona Persona { get; set; }
        public long PersonaId { get; set; }
    }
}