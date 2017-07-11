using PDE.Entities;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace PDE.DataAccess
{
    public class ElementoAdapter : AbstractaAdapter<Elemento>
    {
        public override List<Elemento> GetAll()
        {
            using (var db = new PDEContext())
            {
                return db.Elementos.Include(e => e.Categoria).ToList();
            }
        }

        public override Elemento GetOne(long id)
        {
            using (var db = new PDEContext())
            {
                return db.Elementos.Include(e => e.Categoria).FirstOrDefault(e => e.Id == id);
            }
        }

        public override void Add(Elemento entity)
        {
            entity.Categoria = null;
            base.Add(entity);
        }

        public override void Update(Elemento entity)
        {
            entity.Categoria = null;
            base.Update(entity);
        }
    }
}