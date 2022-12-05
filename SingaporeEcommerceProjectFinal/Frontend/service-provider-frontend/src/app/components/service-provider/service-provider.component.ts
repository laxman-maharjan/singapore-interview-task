import { Component, OnInit } from '@angular/core';
import { IServiceProviderModel } from 'src/app/core/models/i-service-provider-model';
import { ServiceProviderService } from 'src/app/core/services/service-provider.service';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {

  providerId ?: number;
  serviceProviderData : IServiceProviderModel[] = [];

  constructor(private serviceProviderService: ServiceProviderService) { }

  ngOnInit(): void {
  }

  retrieveServiceProviderData(){
    this.serviceProviderService.retrieveServiceProviderData(this.providerId).subscribe(data => {
      this.serviceProviderData = data;
      console.log(JSON.stringify(this.serviceProviderData));
    });
  }

}
