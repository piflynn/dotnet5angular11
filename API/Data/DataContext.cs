using API.Entities;
using API.Entities.Configurations;
using API.EntityConfigurations;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DataContext(DbContextOptions options) : base(options)
        {
        }

        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     // Applies all configs.. DO NOT USE if order of configs is important
        //     // modelBuilder.ApplyConfigurationsFromAssembly(GetType().Assembly);

        //     // Apply configs a la carte
        //     // new UserEntityConfiguration().Configure(modelBuilder.Entity<User>());
        //     // new PhotoEntityConfiguration().Configure(modelBuilder.Entity<Photo>());
        // }

    }
}