using Microsoft.EntityFrameworkCore;

#nullable disable

namespace CognizantChallangeAPI.ModelModel
{
    public partial class CognizantChallangeContext : DbContext
    {
        public CognizantChallangeContext()
        {
        }

        public CognizantChallangeContext(DbContextOptions<CognizantChallangeContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Language> Languages { get; set; }
        public virtual DbSet<Solution> Solutions { get; set; }
        public virtual DbSet<SolutionsView> SolutionsViews { get; set; }
        public virtual DbSet<Task> Tasks { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Language>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("text");
            });

            modelBuilder.Entity<Solution>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Author)
                    .IsRequired()
                    .HasColumnType("varchar")
                    .HasMaxLength(50);

                entity.Property(e => e.LanguageId).HasColumnName("LanguageID");

                entity.Property(e => e.Solution1)
                    .IsRequired()
                    .HasColumnType("text")
                    .HasColumnName("Solution");

                entity.Property(e => e.TaskId).HasColumnName("TaskID");

                entity.HasOne(d => d.Language)
                    .WithMany(p => p.Solutions)
                    .HasForeignKey(d => d.LanguageId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Solutions_Languages");

                entity.HasOne(d => d.Task)
                    .WithMany(p => p.Solutions)
                    .HasForeignKey(d => d.TaskId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Solutions_Tasks");
            });

            modelBuilder.Entity<SolutionsView>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("SolutionsView");

                entity.Property(e => e.Author)
                    .IsRequired()
                    .HasColumnType("varchar")
                    .HasMaxLength(50);

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.Solution)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.Task)
                    .IsRequired()
                    .HasColumnType("text");
            });

            modelBuilder.Entity<Task>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnType("text");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}