using System.Collections.Generic;
using System.Reflection.Emit;

namespace Mission14Api.Data
{
    public partial class MovieDbContext : DbContext
    {
        public MovieDbContext()
        {
        }

        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options)
        {
        }

        public virtual DbSet<Movie> Movies { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlite("Name=ConnectionStrings:MovieDbConn");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Movie>(entity =>
            {
                entity.HasNoKey();
            });
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
