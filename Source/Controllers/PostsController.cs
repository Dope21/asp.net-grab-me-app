using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Projectwebapp.Models;
using Projectwebapp.Services.interfaces;
using System.Reflection;
using Microsoft.AspNetCore.Cors;

namespace Projectwebapp.Controllers
{
    [EnableCors("AllowLocalhost")]
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private IPostsService _postsService;

        public PostsController(IPostsService postsService)
        {
            _postsService = postsService;

        }
        [HttpPost]
        public PostModel Create(PostModel model)
        {
            return _postsService.Create(model);
        }

        [HttpPut("{id}")]
        public ConfirmModel Update(int id, [FromBody] ConfirmModel model)
        {
            return _postsService.Update(id, model);
        }

        [HttpGet("{id}")]
        public PostModel Get(int id)
        {
            return _postsService.Get(id);
        }

        [HttpGet]
        public IEnumerable<PostModel> GetAll()
        {
            return _postsService.Get();
        }

        [HttpGet("view")]
        public IEnumerable<PostModel> GetAccept()
        {
            return _postsService.GetAccept();
        }

        [HttpDelete("{id}")]

        public IActionResult Delete(int id)
        {
            _postsService.Delete(id);

            return Ok();
        }

    }
}
