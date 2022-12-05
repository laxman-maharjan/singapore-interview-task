import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IServiceProviderModel } from '../models/i-service-provider-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  apiBaseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  retrieveServiceProviderData(providerId ?: number): Observable<IServiceProviderModel[]>{
    if(providerId == null || providerId == undefined)
    {
      return this.http.get<IServiceProviderModel[]>(this.apiBaseUrl + 'api/serviceprovider/getprovider');
    }
    else{
      return this.http.get<IServiceProviderModel[]>(this.apiBaseUrl + `api/serviceprovider/getprovider/${providerId}`);
    }
  }

}
