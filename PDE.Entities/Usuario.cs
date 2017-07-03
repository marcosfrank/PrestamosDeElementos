using System.ComponentModel.DataAnnotations.Schema;

namespace PDE.Entities
{
    [Table("Usuarios")]
    public class Usuario : AbstractaEntidad
    {
        public string NombreUsuario { get; set; }
        public string Contrasena { get; set; }
    }
}