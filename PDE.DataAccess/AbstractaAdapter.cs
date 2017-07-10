using PDE.Entities;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace PDE.DataAccess
{
    public abstract class AbstractaAdapter<TEntity> : IAdapter<TEntity> where TEntity : AbstractaEntidad
    {
        public void Add(TEntity entity)
        {
            using (var db = new PDEContext())
            {
                db.Set<TEntity>().Add(entity);
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
                    var dbSet = db.Set<TEntity>();
                    var entity = dbSet.FirstOrDefault(x => x.Id == id);

                    if (entity != null)
                    {
                        dbSet.Remove(entity);
                        db.SaveChanges();
                        result = true;
                    }
                }
            }
            catch { }

            return result;
        }

        public List<TEntity> GetAll()
        {
            using (var db = new PDEContext())
            {
                return db.Set<TEntity>().ToList();
            }
        }

        public TEntity GetOne(long id)
        {
            using (var db = new PDEContext())
            {
                return db.Set<TEntity>().FirstOrDefault(x => x.Id == id);
            }
        }

        public void Update(TEntity entity)
        {
            using (var db = new PDEContext())
            {
                db.Entry(entity).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
    }
}