using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUDDemo.DomainModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        #region Private variables

        private readonly DatabaseContext _databaseContext;

        #endregion

        #region Constructor

        public UserController(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        #endregion

        #region Public Methods

        [HttpGet("get-all-users")]
        public async Task<IActionResult> GetAllUsersAsync()
        {
            List<UserModel> userList = await _databaseContext.Users.ToListAsync();

            if (userList == null)
            {
                return NotFound();
            }

            return Ok(userList);
        }

        [HttpGet("get-user/{id}")]
        public async Task<IActionResult> GetUseByIdAsync([FromRoute] int id)
        {
            UserModel user = await _databaseContext.FindAsync<UserModel>(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> AddUserAsync([FromBody] UserModel userDetails)
        {
            await _databaseContext.AddAsync(userDetails);
            await _databaseContext.SaveChangesAsync();
            return Ok(true);
        }

        [HttpPut]
        public async Task<IActionResult> EditUserAsync([FromBody] UserModel userDetails)
        {
            UserModel user = new UserModel
            {
                UserId = userDetails.UserId
            };

            _databaseContext.Attach(user);
            _databaseContext.Entry(user).Property(x => x.Hobby).IsModified = true;
            _databaseContext.Entry(user).Property(x => x.Gender).IsModified = true;
            _databaseContext.Entry(user).Property(x => x.Status).IsModified = true;
            user.Name = userDetails.Name;
            user.Gender = userDetails.Gender;
            user.Hobby = userDetails.Hobby;
            user.DateOfBirth = userDetails.DateOfBirth;
            user.Email = userDetails.Email;
            user.Status = userDetails.Status;
            await _databaseContext.SaveChangesAsync();
            _databaseContext.Entry(user).State = EntityState.Detached;

            return Ok(true);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserAsync([FromRoute] int id)
        {
            UserModel user = await _databaseContext.FindAsync<UserModel>(id);

            if (user == null)
            {
                return NotFound();
            }

            _databaseContext.Remove(user);
            await _databaseContext.SaveChangesAsync();
            return Ok(true);
        }

        #endregion
    }
}
