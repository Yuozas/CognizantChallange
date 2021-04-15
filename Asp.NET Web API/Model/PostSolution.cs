using System.ComponentModel.DataAnnotations;

namespace CognizantChallangeAPI.Model
{
    public class PostSolution
    {
        [Required]
        [DataType(DataType.Text)]
        public string Author { get; set; }

        [Required]
        public int TaskId { get; set; }

        [Required]
        public int LanguageId { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string Solution { get; set; }
    }
}