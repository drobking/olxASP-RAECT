using DataAccess;
using DataAccess.Entity;
using Domain.Interfaces;
using DTO.Models;
using DTO.Models.Result;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Olx_finish.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Olx_finish.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly EFContext _context;
        private readonly UserManager<UserAdditionalInfo> _userManager;
        private readonly SignInManager<UserAdditionalInfo> _signInManager;
        private readonly IJWTTokenService _jwtTokenService;
        public AuthController(EFContext context,
               UserManager<UserAdditionalInfo> userManager,
                SignInManager<UserAdditionalInfo> signInManager,
                IJWTTokenService jwtTokenService)
        {
            _context = context;
            _userManager = userManager;
            _jwtTokenService = jwtTokenService;
            _signInManager = signInManager;
        }
        [HttpGet("getUser")]
        public List<string> GetUser(){

            return _context.AdditionalInfos.Select(x => x.UserName).ToList();
        }
        [HttpPost("register")]
        public async Task<ResultDTO> Register([FromBody] LoginRegisterDTO model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return new ResultErrorDTO()
                    {
                        Status = 401,
                        Message = "ERROR",
                        Errors = CustomValidator.getErrorsByModel(ModelState)
                    };
                }

                var user = new UserAdditionalInfo()
                {
                    Name = model.FullName,
                    Email = model.Email,
                    UserName = model.Email,
                    Password=model.Password,
                    Id = Guid.NewGuid().ToString(),
                    City = "",
                    Phone = ""

            };

              

                IdentityResult result = await _userManager.CreateAsync(user, model.Password);


                if (result.Succeeded)
                {
                    //result =  _userManager.AddToRoleAsync(user, "User").Result;
                    _context.AdditionalInfos.Add(user);
                    _context.Entry(user).State = EntityState.Modified;
                    _context.SaveChanges();

                    return new ResultDTO()
                    {
                        Message = "OK",
                        Status = 200
                    };
                }
                else
                {
                    return new ResultErrorDTO()
                    {
                        Message = "ERROR",
                        Status = 403,
                        Errors = CustomValidator.getErrorsByIdentityResult(result)
                    };
                }
            }
            catch (Exception e)
            {
                return new ResultErrorDTO
                {
                    Status = 228,
                    Message = e.Message,
                    Errors = new List<string>()
                    {
                        e.Message
                    }
                };
            }

        }
        [HttpPost("loginUser")]
        public async Task<ResultDTO> Login([FromBody] UserLoginDTO model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return new ResultErrorDTO
                    {
                        Message = "ERROR",
                        Status = 401,
                        Errors = CustomValidator.getErrorsByModel(ModelState)
                    };
                }

                var result = _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false).Result;

                if (!result.Succeeded)
                {
                    return new ResultErrorDTO
                    {
                        Status = 403,
                        Message = "ERROR",
                        Errors = new List<string> { "Incorrect email or password" }
                    };
                }
                else
                {
                    var user = await _userManager.FindByNameAsync(model.Email);
                    await _signInManager.SignInAsync(user, false);

                    return new ResultLoginDTO
                    {
                        Status = 200,
                        Message = "OK",
                        Token = _jwtTokenService.CreateToken(user)
                    };
                }
            }
            catch (Exception e)
            {
                return new ResultErrorDTO
                {
                    Status = 500,
                    Message = "ERROR",
                    Errors = new List<string> { e.Message }
                };
            }

        }
    }
}
