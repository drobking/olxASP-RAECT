using System;
using System.Collections.Generic;
using System.Text;

namespace DTO.Models
{
    public class FavoriteDTO
    {
        public int Id { get; set; }
        public int TovarId { get; set; }
        public TovarDTO Tovar { get; set; }
        public string UserId { get; set; }
        public UserAdditionalInfoDTO User { get; set; }
    }
}
