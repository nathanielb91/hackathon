export class TeeTime {
    time: string;
    email: string;
    name: string;
    price: string;
    chanceOfRain: boolean;
    courseName: string;

    constructor(teeTime: any) {
        {
            this.time = teeTime.time;
            this.email = teeTime.email;
            this.name = teeTime.name;
            this.price = teeTime.price;
            this.chanceOfRain = teeTime.chanceOfRain;
            this.courseName = teeTime.courseName;
        }
    }
}

