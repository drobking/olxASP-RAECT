using DataAccess.Entity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess
{
   public class EFContext : IdentityDbContext<UserAdditionalInfo>
    {
        public EFContext(DbContextOptions<EFContext> options) : base(options)
        {

        }

        public DbSet<Tovar> Tovars { get; set; }
        public DbSet<Favorite> Favorites { get; set; }
        public DbSet<Tovar_Image> Tovar_Images { get; set; }
        public DbSet<Categories> Categories { get; set; }
        public DbSet<UserAdditionalInfo> AdditionalInfos { get; set; }
    }
}
