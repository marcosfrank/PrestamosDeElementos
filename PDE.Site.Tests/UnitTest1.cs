using Microsoft.VisualStudio.TestTools.UnitTesting;
using PDE.DataAccess;
using System.Linq;

namespace PDE.Site.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            using (var db = new PDEContext())
            {
                var query = db.Usuarios.ToList();
            }
        }
    }
}