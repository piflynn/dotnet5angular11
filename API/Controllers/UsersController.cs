using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // api/users
        [HttpGet()]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            return Ok(await _userRepository.GetUsersAsync());
        }

        // api/users/3
        [HttpGet("{id}")]
        public async Task<ActionResult<MemberDto>> GetUser(int id)
        {
            return await _userRepository.GetUserByIdAsync(id);
        }

        // api/users/3
        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            return await _userRepository.GetUserByUsernameAsync(username);
        }

        // // api/users
        // [HttpPost()]
        // public async Task<ActionResult> CreateUser(string userName)
        // {
        //     await _context.Users.AddAsync(new User(userName));
        //     _context.SaveChanges();
        //     return Ok();
        // }

        // // api/users/3
        // [HttpPut("{id}")]
        // public async Task<ActionResult> UpdateUser(int id, string userName)
        // {
        //     var user = await _context.Users.FindAsync(id);
        //     if (user != null)
        //     {
        //         user.SetUserName(userName);
        //     }
        //     _context.SaveChanges();
        //     return Ok();
        // }
    }
}