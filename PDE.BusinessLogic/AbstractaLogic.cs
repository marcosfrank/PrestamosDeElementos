using PDE.DataAccess;
using PDE.Entities;
using System.Collections.Generic;

namespace PDE.BusinessLogic
{
    public abstract class AbstractaLogic<TEntity> : ILogic<TEntity> where TEntity : AbstractaEntidad
    {
        protected IAdapter<TEntity> Adapter { get; set; }

        public AbstractaLogic() { }

        public virtual List<TEntity> GetAll()
        {
            return Adapter.GetAll();
        }

        public virtual TEntity GetOne(long id)
        {
            return Adapter.GetOne(id);
        }

        public virtual void Add(TEntity entity)
        {
            Adapter.Add(entity);
        }

        public virtual void Update(TEntity entity)
        {
            Adapter.Update(entity);
        }

        public virtual bool Delete(long id)
        {
            return Adapter.Delete(id);
        }
    }
}