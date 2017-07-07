using PDE.BusinessLogic;
using PDE.Entities;
using System.Web.Http;

namespace PDE.Site.Controllers
{
    public abstract class BaseController<TEntity> : ApiController where TEntity : AbstractaEntidad, new()
    {
        protected ILogic<TEntity> Logic { get; set; }

        public BaseController() { }

        //public IEnumerable<TEntity> Get()
        public IHttpActionResult Get()
        {
            var list = Logic.GetAll();
            return Ok(list);
        }

        //public TEntity Get(long id)
        public IHttpActionResult Get(long id)
        {
            var entity = Logic.GetOne(id);
            return Ok(entity);
        }

        //public void Post([FromBody]TEntity entity)
        public IHttpActionResult Post([FromBody]TEntity entity)
        {
            if (ModelState.IsValid)
            {
                Logic.Add(entity);
                return Ok();
            }

            return BadRequest();
        }

        //public void Put([FromBody]TEntity entity)
        public IHttpActionResult Put([FromBody]TEntity entity)
        {
            if (ModelState.IsValid)
            {
                Logic.Update(entity);
                return Ok();
            }

            return BadRequest();
        }

        //public void Delete(long id)
        public IHttpActionResult Delete(long id)
        {
            var result = Logic.Delete(id);

            if (result)
            {
                return Ok();
            }

            return InternalServerError();
        }
    }
}