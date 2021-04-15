using CognizantChallangeAPI.ModelModel;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json.Serialization;

namespace CognizantChallangeAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin",
                    options => options.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });
            services.AddDbContext<CognizantChallangeContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("CognizantChallangeDBCon")));

            services.AddControllersWithViews()
                .AddNewtonsoftJson(options =>
               options.SerializerSettings.ReferenceLoopHandling =
               Newtonsoft.Json.ReferenceLoopHandling.Ignore
                )
                .AddNewtonsoftJson(options =>
               options.SerializerSettings.ContractResolver =
               new DefaultContractResolver()
                );

            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options => options.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}