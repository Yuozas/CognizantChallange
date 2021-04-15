using System.Collections.Generic;

#nullable disable

namespace CognizantChallangeAPI.ModelModel
{
    public partial class Task
    {
        public Task()
        {
            Solutions = new HashSet<Solution>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Solution> Solutions { get; set; }
    }
}