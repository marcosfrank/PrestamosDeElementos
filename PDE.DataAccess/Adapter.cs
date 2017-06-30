using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PDE.DataAccess
{
    public class Adapter
    {
        public void IntialDB()
        {
            using (var db = new PDEContext())
            {
                db.Categorias.ToList();
            }
        }
    }
}
