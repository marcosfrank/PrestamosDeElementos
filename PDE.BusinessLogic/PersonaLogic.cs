using PDE.DataAccess;
using PDE.Entities;

namespace PDE.BusinessLogic
{
    public class PersonaLogic : AbstractaLogic<Persona>
    {
        public PersonaLogic()
        {
            Adapter = new PersonaAdapter();
        }
    }
}