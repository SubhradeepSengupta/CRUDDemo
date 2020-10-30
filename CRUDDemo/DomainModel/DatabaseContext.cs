using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDDemo.DomainModel
{
    public class DatabaseContext : DbContext
    {
        #region Constructor

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }

        #endregion

        #region DbSet

        // Data set 
        public DbSet<UserModel> Users { get; set; }

        #endregion
    }
}
