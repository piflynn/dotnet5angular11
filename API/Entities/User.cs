namespace API.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; private set; }

        public User(string userName)
        {
            UserName = userName;
        }

        public void SetUserName(string userName)
        {
            UserName = userName;
        }
        
    }
}