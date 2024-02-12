using Microsoft.AspNetCore.Mvc;

namespace Projectwebapp.Models
{
    public class PostModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Phone { get; set; }

        public string Shop { get; set; }

        public string Menu { get; set; }

        public string amount { get; set; }

        public string Description { get; set; }

        public bool Stateorder { get; set; }

        public object ConfirmInfo { get; set; }

    }

}
