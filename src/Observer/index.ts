interface Observer {
  update: (temperature: number) => void;
}

interface Subject { 
  registerObserver: (observer: Observer) => void;
  removeObserver: (observer: Observer) => void;
  notifyObservers: () => void;
}

class WeatherStation implements Subject {
  private temperature: number;
  private observers: Observer[] = [];

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  setTemperature(temp: number): void {
    console.log(`WeatherStation: new temperature measurement: ${temp}`);
    this.temperature = temp;
    this.notifyObservers();
  }
}

class TemperatureDisplay implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
      this.subject = weatherStation;
      weatherStation.registerObserver(this);
  }

  update(temperature: number): void {
      console.log(`TemperatureDisplay: I need to update my display to ${temperature}`);
  }
}

class Fan implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
      this.subject = weatherStation;
      weatherStation.registerObserver(this);
  }

  update(temperature: number): void {
      if (temperature > 25) {
          console.log('Fan: It\'s hot here, turning myself on...');
      } else {
          console.log('Fan: It\'s nice and cool, turning myself off...');
      }
  }
}

let weatherStation = new WeatherStation();
let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(45);
