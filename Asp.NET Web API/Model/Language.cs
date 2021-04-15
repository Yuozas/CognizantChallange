using System.Collections.Generic;

#nullable disable

namespace CognizantChallangeAPI.ModelModel
{
    public partial class Language
    {
        public Language()
        {
            Solutions = new HashSet<Solution>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Solution> Solutions { get; set; }
    }
}