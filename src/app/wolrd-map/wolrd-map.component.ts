import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wolrd-map',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './wolrd-map.component.html',
  styleUrl: './wolrd-map.component.css'
})
export class WolrdMapComponent {

  countryInfo: any = {};
  constructor(private apiService: ApiService) {}

  onMouseDown(event: any){
    this.apiService.setCountryData(event.target.id).subscribe((data: any) => 
      this.countryInfo = {
        ...data
      })
  }
}
