using Microsoft.VisualStudio.TestTools.UnitTesting;
using PDE.DataAccess;
using System.Linq;

namespace PDE.Site.Tests
{
    [TestClass]
    public class DbContextTest
    {
        [TestMethod]
        public void GetUsuarios()
        {
            using (var db = new PDEContext())
            {
                var query = db.Usuarios.ToList();
            }
        }
    }
}