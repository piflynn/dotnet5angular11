using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required(ErrorMessage = "username is required")]
        public string UserName { get; set;}
        
        [Required(ErrorMessage = "password is required")]
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set;}
    }
}