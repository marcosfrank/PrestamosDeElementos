using PDE.BusinessLogic;
using PDE.Entities;
using System.Web.Mvc;

namespace PDE.Site.Controllers
{
    //public abstract class BaseController : Controller
    //{
    //    protected ILogic Logic { get; set; }

    //    public BaseController() { }

    //    [HttpGet]
    //    public virtual ActionResult Index()
    //    {
    //        return View();
    //    }

    //    [HttpGet]
    //    public virtual ActionResult List()
    //    {
    //        // TODO: el tipo de la vista no coincide con el que le mando (AbstractaEntidad)
    //        var list = Logic.GetAll();
    //        return View(list);
    //    }

    //    [HttpGet]
    //    public virtual ActionResult Search(long id)
    //    {
    //        // TODO: el tipo de la vista no coincide con el que le mando (AbstractaEntidad)
    //        var entity = Logic.GetOne(id);
    //        return View(entity);
    //    }

    //    [HttpGet]
    //    public virtual ActionResult Create()
    //    {
    //        return View();
    //    }

    //    [HttpPost]
    //    public virtual ActionResult Create(AbstractaEntidad entity)
    //    {
    //        if (ModelState.IsValid)
    //        {
    //            Logic.Add(entity);
    //            return View("Index");
    //        }

    //        // TODO: el tipo de la vista no coincide con el que le mando (AbstractaEntidad)
    //        return View(entity);
    //    }

    //    [HttpGet]
    //    public virtual ActionResult Update(long id)
    //    {
    //        // TODO: el tipo de la vista no coincide con el que le mando (AbstractaEntidad)
    //        var entity = Logic.GetOne(id);
    //        return View(entity);
    //    }

    //    [HttpPut]
    //    public virtual ActionResult Update(AbstractaEntidad entity)
    //    {
    //        if (ModelState.IsValid)
    //        {
    //            Logic.Update(entity);
    //            return View("Index");
    //        }

    //        // TODO: el tipo de la vista no coincide con el que le mando (AbstractaEntidad)
    //        return View(entity);
    //    }

    //    [HttpDelete]
    //    public virtual ActionResult Remove(long id)
    //    {
    //        var result = Logic.Delete(id);

    //        if (result)
    //        {
    //            return View("Index");
    //        }

    //        return View();
    //    }
    //}

    public abstract class BaseController<TEntity> : Controller where TEntity : AbstractaEntidad, new()
    {
        protected ILogic<TEntity> Logic { get; set; }

        public BaseController() { }

        [HttpGet]
        public virtual ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public virtual ActionResult List()
        {
            var list = Logic.GetAll();
            return View(list);
        }

        [HttpGet]
        public virtual ActionResult Search(long id)
        {
            var entity = Logic.GetOne(id);
            return View(entity);
        }

        [HttpGet]
        public virtual ActionResult Create()
        {
            var entity = new TEntity();
            return View();
        }

        [HttpPost]
        public virtual ActionResult Create(TEntity entity)
        {
            if (ModelState.IsValid)
            {
                Logic.Add(entity);
                return View("Index");
            }

            return View(entity);
        }

        [HttpGet]
        public virtual ActionResult Update(long id)
        {
            var entity = Logic.GetOne(id);
            return View(entity);
        }

        [HttpPut]
        [HttpPost]
        public virtual ActionResult Update(TEntity entity)
        {
            if (ModelState.IsValid)
            {
                Logic.Update(entity);
                return View("Index");
            }

            return View(entity);
        }

        [HttpDelete]
        [HttpGet]
        public virtual ActionResult Remove(long id)
        {
            var result = Logic.Delete(id);

            if (result)
            {
                return View("Index");
            }

            return View();
        }
    }
}