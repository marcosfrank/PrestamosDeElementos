using PDE.DataAccess;
using PDE.Entities;

namespace PDE.BusinessLogic
{
    public class ElementoLogic : AbstractaLogic<Elemento>
    {
        public ElementoLogic()
        {
            Adapter = new ElementoAdapter();
        }
    }
}