using CognizantChallangeAPI.ModelModel;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CognizantChallangeAPI.Model
{
    public static class DatabaseHandlerExtension
    {
        public static void PostSolution(this CognizantChallangeContext context, PostSolution postSolution)
        {
            context.Solutions.Add(
                new Solution()
                {
                    Author = postSolution.Author,
                    TaskId = postSolution.TaskId,
                    LanguageId = postSolution.LanguageId,
                    Solution1 = postSolution.Solution,
                    Language = context.Languages.Where(s => s.Id == postSolution.LanguageId).FirstOrDefault(),
                    Task = context.Tasks.Where(s => s.Id == postSolution.TaskId).FirstOrDefault()
                });
            context.SaveChanges();
        }

        public static SolutionFormatted[] TopSolutions(this CognizantChallangeContext context, int limit = 0)
        {
            var groupedSolutions = context.Solutions.GroupBy(s => s.Author)
            .Select(s => new
            {
                Author = s.Key,
                Total = s.Count()
            }).ToList();

            List<SolutionFormatted> solutionsFormatted = new();

            for (int i = 0; i < groupedSolutions.Count; i++)
            {
                SolutionsView solution = context.SolutionsViews.Where(s => s.Author == groupedSolutions[i].Author).First();
                solutionsFormatted.Add(new SolutionFormatted()
                {
                    Author = groupedSolutions[i].Author,
                    Language = solution.Language,
                    Task = solution.Task,
                    Solution = solution.Solution,
                    Total = groupedSolutions[i].Total
                });
            }
            return solutionsFormatted.OrderByDescending(s => s.Author).Take(limit > 0 && limit <= groupedSolutions.Count ? limit : groupedSolutions.Count).ToArray();
        }
    }
}