using System.ComponentModel.DataAnnotations.Schema;

namespace PDE.Entities
{
    [Table("Elementos")]
    public class Elemento : AbstractaEntidad
    {
        public virtual Categoria Categoria { get; set; }
        public long IdCategoria { get; set; }
    }
}