import { Component } from '@angular/core';
import { IPassenger } from './passenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  passengers: IPassenger[] = [
    {
      id: 1,
      firstName: 'George',
      lastName: 'Ioannou',
      checkedIn: true,
    },
  ];
}
