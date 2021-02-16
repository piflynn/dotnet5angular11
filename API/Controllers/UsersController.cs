using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IPhotoService _photoService;
        private readonly IMapper _mapper;
        public UsersController(IUserRepository userRepository, IMapper mapper, IPhotoService photoService)
        {
            _mapper = mapper;
            _photoService = photoService;
            _userRepository = userRepository;
        }

        // api/users
        [HttpGet()]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            return Ok(await _userRepository.GetUsersAsync());
        }

        // api/users/3
        // [HttpGet("{id}")]
        // public async Task<ActionResult<MemberDto>> GetUser(int id)
        // {
        //     return await _userRepository.GetUserByIdAsync(id);
        // }

        // api/users/3
        [HttpGet("{username}", Name = "GetUser")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            return _mapper.Map<MemberDto>(await _userRepository.GetUserByUsernameAsync(username));
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

        // api/users/add-photo
        [HttpPost("add-photo")]
        public async Task<ActionResult<PhotoDto>> AddPhoto(IFormFile file)
        {
            var user = await _userRepository.GetUserByUsernameAsync(User.GetUsername());
            var result = await _photoService.AddPhotoAsync(file);
            if (result.Error != null) return BadRequest(result.Error.Message);
            var photo = new Photo(result.SecureUrl.AbsoluteUri, result.PublicId);
            if (user.Photos.Count == 0)
            {
                photo.SetIsMain(true);
            }
            user.Photos.Add(photo);
            if (await _userRepository.SaveAllAsync())
            {
                // return _mapper.Map<Photo, PhotoDto>(photo);
                return CreatedAtRoute("GetUser", new {username = user.UserName}, _mapper.Map<Photo, PhotoDto>(photo));
            }
            return BadRequest("Problem adding photo");
        }
    }
}