using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Photos")]
    public class Photo
    {
        private Photo(){}
        public Photo(string url, string publicId){
            Url = url;
            PublicId = publicId;
        }
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }

        public void SetIsMain(bool isMain) => IsMain = isMain;

        public override string ToString()
        {
            return $"{Url}";
        }
    }
}