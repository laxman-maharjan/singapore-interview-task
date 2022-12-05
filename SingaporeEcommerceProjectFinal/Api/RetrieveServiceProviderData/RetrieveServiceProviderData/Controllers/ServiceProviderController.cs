using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RetrieveServiceProviderData.Models;

namespace RetrieveServiceProviderData.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceProviderController : ControllerBase
    {
        [HttpGet("getprovider")]
        public ActionResult<IEnumerable<ServiceProviderModel>> GetProvider()
        {
            List<ServiceProviderModel> items = GetServiceProviderDataFromJsonFile();

            IEnumerable<ServiceProviderModel> result;
            result = from item in items
                     select item;
            return Ok(result);
        }

        [HttpGet("getprovider/{id}")]
        public ActionResult<IEnumerable<ServiceProviderModel>> GetProvider(int id)
        {
            List<ServiceProviderModel> items = GetServiceProviderDataFromJsonFile();

            IEnumerable<ServiceProviderModel> result;
            result = from item in items
                     where item.Provider.ProviderId == id.ToString()
                     select item;

            return Ok(result);
        }

        private List<ServiceProviderModel> GetServiceProviderDataFromJsonFile()
        {
            var jsonFile = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + @"\JsonFiles\ServiceProvider.json");
            var items = JsonConvert.DeserializeObject<List<ServiceProviderModel>>(jsonFile);
            return items;
        }

    }
}
