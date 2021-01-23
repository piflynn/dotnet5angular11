using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        // api/users
        [AllowAnonymous]
        [HttpGet()]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // api/users/3
        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            return await _context.Users.FindAsync(id);
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