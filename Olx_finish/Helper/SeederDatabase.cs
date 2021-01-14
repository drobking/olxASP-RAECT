using DataAccess;
using DataAccess.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Olx_finish.Helper
{
    public class SeederDatabase
    {
        public static void SeedData(IServiceProvider services,
           Microsoft.AspNetCore.Hosting.IWebHostEnvironment env,
           IConfiguration config)
        {
            using (var scope = services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var manager = scope.ServiceProvider.GetRequiredService<UserManager<UserAdditionalInfo>>();
                var managerRole = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                var context = scope.ServiceProvider.GetRequiredService<EFContext>();
                SeedUsers(manager, managerRole, context);
            }
        }



        private static void SeedUsers(UserManager<UserAdditionalInfo> userManager, RoleManager<IdentityRole> roleManager, EFContext _context)
        {
           
            //  _context.SaveChanges();
            var roleName = "Admin";
            if (roleManager.FindByNameAsync(roleName).Result == null)
            {
                var resultAdminRole = roleManager.CreateAsync(new IdentityRole
                {
                    Name = "Admin"
                }).Result;

                var resultUserRole = roleManager.CreateAsync(new IdentityRole
                {
                    Name = "User"
                }).Result;


                string email = "admin@gmail.com";
                var admin = new UserAdditionalInfo
                {
                    Email = email,
                    UserName = email
                };
                var andrii = new UserAdditionalInfo
                {
                    Email = "egor@gmail.com",
                    UserName = "egor@gmail.com"
                };

                var resultAdmin = userManager.CreateAsync(admin, "Qwerty1-").Result;
                resultAdmin = userManager.AddToRoleAsync(admin, "Admin").Result;

                var resultAndrii = userManager.CreateAsync(andrii, "Qwerty1-").Result;
                resultAndrii = userManager.AddToRoleAsync(andrii, "User").Result;
            }
        }

    }
}
