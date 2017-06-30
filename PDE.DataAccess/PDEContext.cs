using PDE.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PDE.DataAccess
{
    public class PDEContext : DbContext
    {
        public PDEContext() : base("PDE") { }
        public DbSet<Persona> Personas { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Elemento> Elementos { get; set; }
        public DbSet<Prestamo> Prestamos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
    }
}
