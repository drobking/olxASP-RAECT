﻿using DataAccess;
using DataAccess.Entity;
using Domain.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Domain.Implementations
{
    public class JWTTokenService : IJWTTokenService
    {
        private readonly EFContext _context;
        private readonly IConfiguration _configuration;
        private readonly UserManager<UserAdditionalInfo> _userManager;

        public JWTTokenService(
            EFContext context,
            IConfiguration configuration,
            UserManager<UserAdditionalInfo> userManager)
        {
            _configuration = configuration;
            _context = context;
            _userManager = userManager;
        }
        public string CreateToken(UserAdditionalInfo user)
        {

            var roles = _userManager.GetRolesAsync(user).Result;
            var claims = new List<Claim>
            {
                new Claim("id", user.Id.ToString()),
                new Claim("email", user.Email.ToString())
            };

            foreach (var role in roles)
            {
                claims.Add(new Claim("roles", role));
            }

            var jwtTokenSecretKey = _configuration.GetValue<string>("SecretPhrase");
            var signInKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtTokenSecretKey));
            var signInCredentials = new SigningCredentials(signInKey, SecurityAlgorithms.HmacSha256);

            var jwt = new JwtSecurityToken(
                    signingCredentials: signInCredentials,
                    claims: claims,
                    expires: DateTime.Now.AddDays(7)
                );

            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }
    }
}
