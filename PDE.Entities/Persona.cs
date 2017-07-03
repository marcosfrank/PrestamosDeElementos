using System.ComponentModel.DataAnnotations.Schema;

namespace PDE.Entities
{
    [Table("Personas")]
    public class Persona : AbstractaEntidad
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }

        public override string Descripcion
        {
            get { return Nombre + " " + Apellido; }
        }
    }
}