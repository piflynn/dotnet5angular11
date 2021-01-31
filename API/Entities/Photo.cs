using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Photos")]
    public class Photo
    {
        private Photo(){}
        public Photo(string url, bool isMain){
            Url = url;
            IsMain = isMain;
        }
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }


        public override string ToString()
        {
            return $"{Url}";
        }
    }
}