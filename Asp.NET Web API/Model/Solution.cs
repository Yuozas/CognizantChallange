#nullable disable

namespace CognizantChallangeAPI.ModelModel
{
    public partial class Solution
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public int TaskId { get; set; }
        public int LanguageId { get; set; }
        public string Solution1 { get; set; }
        public virtual Language Language { get; set; }
        public virtual Task Task { get; set; }
    }
}