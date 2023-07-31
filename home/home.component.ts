import { Component, OnInit } from '@angular/core';
import { TeeTimesService } from '../tee-times.service';
import { TeeTime } from '../teeTime.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  constructor(
    private teeTimesService: TeeTimesService
  ) {}

  allTeeTimes: TeeTime[] = [
    {
        "time": "2023-05-31T09:00:00",
        "email": "john@doe.io",
        "name": "John Doe",
        "price": "$65.00",
        "chanceOfRain": false,
        "courseName": 'Prarie Vista',
    },
    {
        "time": "2023-05-31T11:00:00",
        "email": "james@veritas.com",
        "name": "James Everton",
        "price": "$48.00",
        "chanceOfRain": false,
        "courseName": 'El Paso Golf Course',
    },
    {
        "time": "2023-05-31T10:30:00",
        "email": "nathaniel@veritas.com",
        "name": "Nathaniel Bass",
        "price": "$65.00",
        "chanceOfRain": true,
        "courseName": 'Prarie Vista',
    },
    {
      "time": "2023-05-31T09:00:00",
      "email": "john@doe.io",
      "name": "John Doe",
      "price": "$65.00",
      "chanceOfRain": false,
      "courseName": 'Prarie Vista',
  },
  {
      "time": "2023-05-31T11:00:00",
      "email": "james@veritas.com",
      "name": "James Everton",
      "price": "$48.00",
      "chanceOfRain": false,
      "courseName": 'El Paso Golf Course',
  },
  {
      "time": "2023-05-31T10:30:00",
      "email": "nathaniel@veritas.com",
      "name": "Nathaniel Bass",
      "price": "$65.00",
      "chanceOfRain": true,
      "courseName": 'Prarie Vista',
  },
  {
    "time": "2023-05-31T09:00:00",
    "email": "john@doe.io",
    "name": "John Doe",
    "price": "$65.00",
    "chanceOfRain": false,
    "courseName": 'Prarie Vista',
},
{
    "time": "2023-05-31T11:00:00",
    "email": "james@veritas.com",
    "name": "James Everton",
    "price": "$48.00",
    "chanceOfRain": false,
    "courseName": 'El Paso Golf Course',
},
{
    "time": "2023-05-31T10:30:00",
    "email": "nathaniel@veritas.com",
    "name": "Nathaniel Bass",
    "price": "$65.00",
    "chanceOfRain": true,
    "courseName": 'Prarie Vista',
},
{
  "time": "2023-05-31T09:00:00",
  "email": "john@doe.io",
  "name": "John Doe",
  "price": "$65.00",
  "chanceOfRain": false,
  "courseName": 'Prarie Vista',
},
{
  "time": "2023-05-31T11:00:00",
  "email": "james@veritas.com",
  "name": "James Everton",
  "price": "$48.00",
  "chanceOfRain": false,
  "courseName": 'El Paso Golf Course',
},
{
  "time": "2023-05-31T10:30:00",
  "email": "nathaniel@veritas.com",
  "name": "Nathaniel Bass",
  "price": "$65.00",
  "chanceOfRain": true,
  "courseName": 'Prarie Vista',
}
  ];

  goodWeatherTeeTimes: TeeTime[] = [];

  ngOnInit(): void {
    this.teeTimesService.getTeeTimes().subscribe((data: any) => {
      console.log('!!!!!!!!!!!!!!!!!');
      console.log(data);
    });

    this.allTeeTimes.forEach(teeTime => {
      if (!teeTime.chanceOfRain) {
        this.goodWeatherTeeTimes.push(teeTime);
      }
    });


  }

}
