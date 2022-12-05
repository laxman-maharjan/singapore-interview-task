using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RetrieveServiceProviderData.Models
{
    public class ServiceProviderModel
    {
        public ServiceModel Service { get; set; }
        public ProviderModel Provider { get; set; }
        public string BeginTime { get; set; }
        public string EndTime { get; set; }

    }

    public class ServiceModel
    {
        public string Name { get; set; }
    }

    public class ProviderModel
    {
        public string ProviderId { get; set; }
        public string Name { get; set; }
    }
}
