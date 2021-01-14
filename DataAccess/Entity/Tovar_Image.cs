namespace DataAccess.Entity
{
    public class Tovar_Image
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public Tovar Tovar { get; set; }
    }
}