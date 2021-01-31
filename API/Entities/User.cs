using System;
using System.Collections.Generic;
using System.Linq;
using API.Extensions;

namespace API.Entities
{
    public class User
    {
        private User(){}

        public User(
            string userName,
            byte[] passwordHash,
            byte[] passwordSalt
            // DateTime dateOfBirth,
            // string knownAs,
            // DateTime created,
            // DateTime lastActive,
            // string gender,
            // string introduction,
            // string lookingFor,
            // string interests,
            // string city,
            // string country,
            // Photo photo
            )
        {
            UserName = userName;
            PasswordHash = passwordHash;
            PasswordSalt = passwordSalt;
            // DateOfBirth = dateOfBirth;
            // KnownAs = knownAs;
            // Created = created;
            // LastActive = lastActive;
            // Gender = gender;
            // Introduction = introduction;
            // LookingFor = lookingFor;
            // Interests = Interests;
            // City = city;
            // Country = country;
            // Photos.Add(photo);
        }
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; } = DateTime.Now;
        public DateTime LastActive { get; set; } = DateTime.Now;
        public string Gender { get; set; }
        public string Introduction {get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public ICollection<Photo> Photos { get; set; }


        // public void SetUserName(string userName)
        // {
        //     UserName = userName;
        // }
        // public void SetKnownAs(string knownAs)
        // {
        //     KnownAs = knownAs;
        // }
        // public void addPhoto(Photo photo)
        // {
        //     Photos.Add(photo);
        // }

        public int GetAge()
        {
            return DateOfBirth.CalculateAge();
        }

        public override string ToString() {
            var photo = Photos.ToList().Find(p => p.Url != null);
            return $"{UserName}: PhotoUrl: {photo}";
        }

    }
}