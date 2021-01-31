using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using System.Collections.Generic;
using API.Entities;
using System.Text;
using Microsoft.Extensions.Logging;
using System.Security.Cryptography;

namespace API.Data
{
    public class SeedService
    {
        public static async Task SeedUsersAsync(DataContext context, ILogger logger)
        {
            // do not seed if users table has entities
            if (await context.Users.AnyAsync()) return;

            // simple async file read
            var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");
            var users = JsonSerializer.Deserialize<List<User>>(userData);

            var index = 0;
            foreach (var user in users)
            {
                index++;
                logger.LogInformation($"User {index}: {user.ToString()}");
                using var hmac = new HMACSHA512();
                user.UserName = user.UserName.ToLower();
                user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("password"));
                user.PasswordSalt = hmac.Key;

                context.Users.Add(user);
            }
            await context.SaveChangesAsync();        
        }
    }
}