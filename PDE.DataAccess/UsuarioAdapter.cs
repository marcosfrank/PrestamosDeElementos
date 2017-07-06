using PDE.Entities;
using System.Collections.Generic;
using System.Linq;

namespace PDE.DataAccess
{
    public class UsuarioAdapter : IAdapter<Usuario>
    {
        public void Add(Usuario entity)
        {
            using (var db = new PDEContext())
            {
                db.Usuarios.Add(entity);
                db.SaveChanges();
            }
        }

        public bool Delete(long id)
        {
            var result = false;

            try
            {
                using (var db = new PDEContext())
                {
                    var entity = db.Usuarios.FirstOrDefault(x => x.Id == id);

                    if (entity != null)
                    {
                        db.Usuarios.Remove(entity);
                        db.SaveChanges();
                        result = true;
                    }
                }
            }
            catch { }

            return result;
        }

        public List<Usuario> GetAll()
        {
            using (var db = new PDEContext())
            {
                return db.Usuarios.ToList();
            }
        }

        public Usuario GetOne(long id)
        {
            using (var db = new PDEContext())
            {
                return db.Usuarios.FirstOrDefault(x => x.Id == id);
            }
        }

        public bool Login(string nombreUsuario, string contrasena)
        {
            bool ret = false;

            using (var db = new PDEContext())
            {
                db.Usuarios.Count(x=> x.NombreUsuario == nombreUsuario && x.Contrasena == contrasena);
            }

            return ret;
        }

        public void Update(Usuario entity)
        {
            using (var db = new PDEContext())
            {
                db.Usuarios.Attach(entity);
                db.SaveChanges();
            }
        }
    }
}