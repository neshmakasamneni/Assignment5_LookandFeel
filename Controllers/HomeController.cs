using Final1.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Final1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Charts()
        {
            return View();
        }

        public IActionResult Menu()
        {
            return View();
        }

        public IActionResult Events()
        {
            return View();
        }

        public IActionResult Ratings()
        {
            return View();
        }
        public IActionResult Feedback()
        {
            return View();
        }
        public IActionResult About()
        {
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
