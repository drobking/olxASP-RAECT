namespace DTO.Models
{
    public class Tovar_ImageDTO
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public TovarDTO Tovar { get; set; }
    }
}