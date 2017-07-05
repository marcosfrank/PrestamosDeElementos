using System.Collections.Generic;
using PDE.Entities;

namespace PDE.DataAccess
{
    public interface IAdapter<TEntity> where TEntity : AbstractaEntidad
    {
        List<TEntity> GetAll();
        TEntity GetOne(long id);
        void Add(TEntity entity);
        void Update(TEntity entity);
        bool Delete(long id);
    }
}