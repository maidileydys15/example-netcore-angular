using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace example.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            var x = new List<string>() { "pepe", "juan", "pedro" };
            return x;
        }
    }
}