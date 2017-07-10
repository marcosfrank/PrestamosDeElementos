using PDE.Entities;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace PDE.DataAccess
{
    public class CategoriaAdapter : IAdapter<Categoria>
    {
        public void Add(Categoria entity)
        {
            using (var db = new PDEContext())
            {
                db.Categorias.Add(entity);
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
                    var entity = db.Categorias.FirstOrDefault(x => x.Id == id);

                    if (entity != null)
                    {
                        db.Categorias.Remove(entity);
                        db.SaveChanges();
                        result = true;
                    }
                }
            }
            catch { }

            return result;
        }

        public List<Categoria> GetAll()
        {
            using (var db = new PDEContext())
            {
                return db.Categorias.ToList();
            }
        }

        public Categoria GetOne(long id)
        {
            using (var db = new PDEContext())
            {
                return db.Categorias.FirstOrDefault(x => x.Id == id);
            }
        }

        public void Update(Categoria entity)
        {
            using (var db = new PDEContext())
            {
                //db.Categorias.Attach(entity);
                db.Entry(entity).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
    }
}