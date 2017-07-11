using PDE.Entities;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace PDE.DataAccess
{
    public abstract class AbstractaAdapter<TEntity> : IAdapter<TEntity> where TEntity : AbstractaEntidad
    {
        public virtual void Add(TEntity entity)
        {
            using (var db = new PDEContext())
            {
                db.Set<TEntity>().Add(entity);
                db.SaveChanges();
            }
        }

        public virtual bool Delete(long id)
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

        public virtual List<TEntity> GetAll()
        {
            using (var db = new PDEContext())
            {
                return db.Set<TEntity>().ToList();
            }
        }

        public virtual TEntity GetOne(long id)
        {
            using (var db = new PDEContext())
            {
                return db.Set<TEntity>().FirstOrDefault(x => x.Id == id);
            }
        }

        public virtual void Update(TEntity entity)
        {
            using (var db = new PDEContext())
            {
                db.Entry(entity).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
    }
}