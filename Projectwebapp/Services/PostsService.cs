using Projectwebapp.Data;
using Projectwebapp.Models;
using Projectwebapp.Services.interfaces;
using System.Data;

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
            try
            {
                var lastPost = _dateContext.Posts.LastOrDefault();
                int newId = lastPost is null ? 1 : lastPost.Id + 1;
                model.Stateorder = true;
                model.Id = newId;
                _dateContext.Posts.Add(model);


                return model;
            }
            catch (Exception ex)
            {
                Console.WriteLine("เกิดข้อผิดพลาด: " + ex.Message);


                return null;
            }
        }
        public PostModel Update(PostModel model)
        {
            try
            {
                var Updatestate = _dateContext.Posts.FirstOrDefault(x => x.Id == model.Id); 
                Updatestate.Name = model.Name;
                Updatestate.Phone = model.Phone;
                Updatestate.Shop = model.Shop;
                Updatestate.Menu = model.Menu;
                Updatestate.amount = model.amount;
                Updatestate.Discription = model.Discription;
                Updatestate.Stateorder = false;

                return Updatestate;


            }
            catch(Exception ex)
            {

                return null;
            }

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

