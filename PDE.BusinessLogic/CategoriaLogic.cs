using PDE.DataAccess;
using PDE.Entities;

namespace PDE.BusinessLogic
{
    public class CategoriaLogic : AbstractaLogic<Categoria>
    {
        public CategoriaLogic()
        {
            Adapter = new CategoriaAdapter();
        }
    }
}