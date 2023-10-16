using Microsoft.AspNetCore.Mvc;
using Projectwebapp.Models;

namespace Projectwebapp.Services.interfaces
{
    public interface IPostsService
    {

        PostModel  Create(PostModel model);

        PostModel  Update(PostModel model);

        PostModel Get(int id);

        List<PostModel>  Get();

        void  Delete(int id);
    }
}
