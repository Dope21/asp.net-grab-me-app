using Microsoft.AspNetCore.Mvc;
using Projectwebapp.Models;

namespace Projectwebapp.Services.interfaces
{
    public interface IPostsService
    {

        PostModel Create(PostModel model);

        ConfirmModel Update(int id, ConfirmModel model);

        PostModel Get(int id);

        List<PostModel> Get();

        List<PostModel> GetAccept();

        void Delete(int id);
    }
}
