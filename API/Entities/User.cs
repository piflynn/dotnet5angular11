namespace API.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public User(string userName)
        {
            UserName = userName;
        }
        
    }
}