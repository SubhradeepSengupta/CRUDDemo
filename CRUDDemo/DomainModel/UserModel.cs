using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDDemo.DomainModel
{
    public class UserModel
    {
        [Key]
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        // It is not a good idea to store clear text passwords. I would have used identity instead.
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public Hobby Hobby { get; set; }
        public DateTime DateOfBirth { get; set; }
        public Gender Gender { get; set; }
        public bool Status { get; set; }
    }

    public enum Gender
    {
        [Description("Male")]
        Male,
        [Description("Female")]
        Female
    }

    public enum Hobby
    {
        [Description("Cricket")]
        Cricket,
        [Description("Football")]
        Football,
        [Description("Basket Ball")]
        BasketBall
    }
}
