using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PDE.Site.Startup))]
namespace PDE.Site
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
