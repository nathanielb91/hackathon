import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
        "time": "2023-08-01T09:00:00",
        "email": "john@doe.io",
        "name": "John Doe",
        "price": "$65.00",
        "chanceOfRain": false,
        "courseName": 'Prarie Vista',
    },
    {
        "time": "2023-08-01T11:00:00",
        "email": "james@veritas.com",
        "name": "James Everton",
        "price": "$48.00",
        "chanceOfRain": false,
        "courseName": 'El Paso Golf Course',
    },
    {
        "time": "2023-08-02T10:30:00",
        "email": "nathaniel@veritas.com",
        "name": "Nathaniel Bass",
        "price": "$65.00",
        "chanceOfRain": true,
        "courseName": 'Prarie Vista',
    },
    {
      "time": "2023-08-02T13:00:00",
      "email": "john@doe.io",
      "name": "John Doe",
      "price": "$65.00",
      "chanceOfRain": false,
      "courseName": 'Prarie Vista',
  },
  {
      "time": "2023-08-02T15:00:00",
      "email": "james@veritas.com",
      "name": "James Everton",
      "price": "$48.00",
      "chanceOfRain": false,
      "courseName": 'El Paso Golf Course',
  },
  {
      "time": "2023-08-03T10:30:00",
      "email": "nathaniel@veritas.com",
      "name": "Nathaniel Bass",
      "price": "$65.00",
      "chanceOfRain": true,
      "courseName": 'Blue Bird Golf Course',
  },
  {
    "time": "2023-08-03T09:00:00",
    "email": "john@doe.io",
    "name": "John Doe",
    "price": "$65.00",
    "chanceOfRain": false,
    "courseName": 'Prarie Vista',
},
{
    "time": "2023-08-04T07:00:00",
    "email": "james@veritas.com",
    "name": "James Everton",
    "price": "$48.00",
    "chanceOfRain": false,
    "courseName": 'El Paso Golf Course',
},
{
    "time": "2023-08-04T10:30:00",
    "email": "nathaniel@veritas.com",
    "name": "Nathaniel Bass",
    "price": "$65.00",
    "chanceOfRain": true,
    "courseName": 'Prarie Vista',
},
{
  "time": "2023-08-04T09:00:00",
  "email": "john@doe.io",
  "name": "John Doe",
  "price": "$65.00",
  "chanceOfRain": false,
  "courseName": 'Sunshine Golf club',
},
{
  "time": "2023-08-04T11:00:00",
  "email": "james@veritas.com",
  "name": "James Everton",
  "price": "$48.00",
  "chanceOfRain": true,
  "courseName": 'El Paso Golf Course',
},
{
  "time": "2023-08-05T10:30:00",
  "email": "nathaniel@veritas.com",
  "name": "Nathaniel Bass",
  "price": "$65.00",
  "chanceOfRain": true,
  "courseName": 'Prarie Vista',
},
{
  "time": "2023-08-05T11:00:00",
  "email": "james@veritas.com",
  "name": "James Everton",
  "price": "$72.00",
  "chanceOfRain": false,
  "courseName": 'Eagle Creek Golf Course',
},
{
        "time": "2023-08-06T09:00:00",
        "email": "john@doe.io",
        "name": "Ashwin Mathews",
        "price": "$65.00",
        "chanceOfRain": false,
        "courseName": 'Prarie Vista',
    },
    {
        "time": "2023-08-06T11:00:00",
        "email": "james@veritas.com",
        "name": "James Everton",
        "price": "$48.00",
        "chanceOfRain": false,
        "courseName": 'El Paso Golf Course',
    },
    {
        "time": "2023-08-06T10:30:00",
        "email": "nathaniel@veritas.com",
        "name": "Nathaniel Bass",
        "price": "$65.00",
        "chanceOfRain": true,
        "courseName": 'Prarie Vista',
    },
    {
      "time": "2023-08-07T13:00:00",
      "email": "john@doe.io",
      "name": "John Doe",
      "price": "$65.00",
      "chanceOfRain": false,
      "courseName": 'Prarie Vista',
  },
  {
      "time": "2023-08-07T15:00:00",
      "email": "james@veritas.com",
      "name": "James Everton",
      "price": "$48.00",
      "chanceOfRain": false,
      "courseName": 'El Paso Golf Course',
  },{
    "time": "2023-08-07T09:00:00",
    "email": "john@doe.io",
    "name": "John Doe",
    "price": "$65.00",
    "chanceOfRain": false,
    "courseName": 'Prarie Vista',
},
{
    "time": "2023-08-07T11:00:00",
    "email": "james@veritas.com",
    "name": "James Everton",
    "price": "$48.00",
    "chanceOfRain": false,
    "courseName": 'El Paso Golf Course',
},
{
    "time": "2023-08-07T10:30:00",
    "email": "nathaniel@veritas.com",
    "name": "Nathaniel Bass",
    "price": "$49.00",
    "chanceOfRain": true,
    "courseName": 'Prarie Vista',
},
{
  "time": "2023-08-07T13:00:00",
  "email": "john@doe.io",
  "name": "John Doe",
  "price": "$55.00",
  "chanceOfRain": false,
  "courseName": 'Prarie Vista',
},
{
  "time": "2023-08-07T15:00:00",
  "email": "james@veritas.com",
  "name": "James Everton",
  "price": "$74.00",
  "chanceOfRain": false,
  "courseName": 'El Paso Golf Course',
},
  ];

  goodWeatherTeeTimes: TeeTime[] = [];
  badWeatherTeeTimes: TeeTime[] = [];
  teeTimeBooked: boolean = false
  selectedTeeTime: any;

  ngOnInit(): void {
    this.teeTimesService.getTeeTimes().subscribe((data: any) => {
      console.log(data);
    });

    this.allTeeTimes.forEach(teeTime => {
      if (!teeTime.chanceOfRain) {
        this.goodWeatherTeeTimes.push(teeTime);
      }
      if (teeTime.chanceOfRain) {
        this.badWeatherTeeTimes.push(teeTime);
      }
    });
  }

  bookTeeTime(teeTime: TeeTime) {
    this.selectedTeeTime = teeTime;
    this.teeTimeBooked = true;
  }

}
