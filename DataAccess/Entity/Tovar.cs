using System.Collections.Generic;

namespace DataAccess.Entity
{
    public class Tovar
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Cost { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public Categories Category { get; set; }

        public string UserId { get; set; }
        public virtual ICollection<Tovar_Image> Images { get; set; }
    }
}