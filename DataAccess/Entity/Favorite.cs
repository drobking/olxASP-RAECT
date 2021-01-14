using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Entity
{
    public class Favorite
    {
        public int Id { get; set; }
        public int TovarId { get; set; }
        public Tovar Tovar { get; set; }
        public string UserId { get; set; }
        public UserAdditionalInfo User { get; set; }
    }
}
