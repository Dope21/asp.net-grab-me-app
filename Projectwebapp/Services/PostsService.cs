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
                model.Stateorder = false;
                model.Id = newId;
                model.ConfirmInfo = null;
                _dateContext.Posts.Add(model);
                return model;
            }
            catch (Exception ex)
            {
                Console.WriteLine("เกิดข้อผิดพลาด: " + ex.Message);
                return null;
            }
        }
        public ConfirmModel Update(int id, ConfirmModel model)
        {
            try
            {
                // return model;
                var UpdateData = _dateContext.Posts.FirstOrDefault(x => x.Id == id);
                if (UpdateData != null)
                {
                    ConfirmModel data = new ConfirmModel
                    {
                        Name = model.Name,
                        Phone = model.Phone,
                        Detail = model.Detail
                    };
                    UpdateData.Stateorder = true;
                    UpdateData.ConfirmInfo = data;

                }
                var test = _dateContext.Posts.FirstOrDefault(x => x.Id == id);
                return model;

            }
            catch (Exception ex)
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
            return _dateContext.Posts.Where(post => post.Stateorder != true).ToList();
        }

        public List<PostModel> GetAccept()
        {
            return _dateContext.Posts.Where(post => post.Stateorder == true).ToList();
        }
    }
}

