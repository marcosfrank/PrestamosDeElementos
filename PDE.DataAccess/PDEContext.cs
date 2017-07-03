using PDE.DataAccess.Migrations;
using PDE.Entities;
using System.Data.Entity;

namespace PDE.DataAccess
{
    public class PDEContext : DbContext
    {
        public PDEContext() : base("PDE")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<PDEContext, Configuration>("PDE"));
        }

        public DbSet<Persona> Personas { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Elemento> Elementos { get; set; }
        public DbSet<Prestamo> Prestamos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
    }
}