using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required(ErrorMessage = "username is required")]
        public string UserName { get; set;}
        
        [Required(ErrorMessage = "password is required")]
        public string Password { get; set;}
    }
}