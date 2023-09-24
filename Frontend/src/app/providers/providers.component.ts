import { Component, OnInit } from '@angular/core';
import { providers } from '../models/provider.data';
import { ProviderClass } from '../models/providers.class';
import { ProviderService } from '../services/provider.service';


@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  providers = new Array<ProviderClass>;
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.providerService.getProviders().subscribe(
      data => {
        this.providers = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
