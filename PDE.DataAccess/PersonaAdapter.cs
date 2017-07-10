using PDE.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PDE.DataAccess
{
    public class PersonaAdapter : IAdapter<Persona>
    {
        public void Add(Persona entity)
        {
            using (var db = new PDEContext())
            {
                db.Personas.Add(entity);
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
                    var entity = db.Personas.FirstOrDefault(x => x.Id == id);

                    if (entity != null)
                    {
                        db.Personas.Remove(entity);
                        db.SaveChanges();
                        result = true;
                    }
                }
            }
            catch { }

            return result;
        }

        public List<Persona> GetAll()
        {
            using (var db = new PDEContext())
            {
                return db.Personas.ToList();
            }
        }

        public Persona GetOne(long id)
        {
            using (var db = new PDEContext())
            {
                return db.Personas.FirstOrDefault(x => x.Id == id);
            }
        }

        public void Update(Persona entity)
        {
            using (var db = new PDEContext())
            {
                db.Personas.Attach(entity);
                db.SaveChanges();
            }
        }
    }
}