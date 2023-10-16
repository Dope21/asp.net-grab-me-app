using Projectwebapp.Data;
using Projectwebapp.Models;
using Projectwebapp.Services.interfaces;

namespace Projectwebapp.Services
{
    public class PostsService : IPostsService
    {

        private MyDataContext _dateContext;

        public PostsService(MyDataContext dataContext) 
        { 
            _dateContext = dataContext;

        }
        public PostModel Create(PostModel model)
        {
            var lastPost = _dateContext.Posts.LastOrDefault();
            int newId = lastPost is null ? 1 : lastPost.Id + 1;

            model.Id = newId;
            _dateContext.Posts.Add(model);

            return model;
        }
        public PostModel Update(PostModel model)
        {
            var modelToUpdate = _dateContext.Posts.FirstOrDefault(x => x.Id == model.Id);
            modelToUpdate.Name = model.Name;
            modelToUpdate.Phone = model.Phone;
            modelToUpdate.Menu = model.Menu;
            modelToUpdate.amount = model.amount;
            modelToUpdate.Discription = model.Discription;
            modelToUpdate.Stateorder = "orderaccpet";

            return modelToUpdate;
        }

        public void Delete(int id)
        {
            var modelToDelete = _dateContext.Posts.FirstOrDefault(x => x.Id == id);
            _dateContext.Posts.Remove(modelToDelete);
        }

        public PostModel Get(int id)
        {
            return _dateContext.Posts.FirstOrDefault(x => x.Id == id);
        }

        public List<PostModel> Get()
        {
            return _dateContext.Posts;
        }
    }
}
