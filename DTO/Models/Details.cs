using System;
using System.Collections.Generic;
using System.Text;

namespace DTO.Models
{
   public class Details
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Cost { get; set; }
        public string Description { get; set; }
        public string CategoryName { get; set; }

        public string UserName { get; set; }
        public virtual ICollection<Tovar_ImageDTO> Images { get; set; }
    }
}
