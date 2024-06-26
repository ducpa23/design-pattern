
interface TaxiCalculator {
  calculatePriceInEuros(km: number, isAirport: boolean): number;
}
// Service
class UKTaxiCalculatorLibrary {
  public getPriceInPounds(miles: number, fare: Fares): number { 
    if (fare === Fares.Airport) {
      return 5 + miles * 2.15;
    }

    return miles * 1.95;
  }
}

export enum Fares {
  Standard,
  Airport,
}

// Adapter

class UKTaxiCalculatorLibraryAdapter implements TaxiCalculator {
  constructor(private adaptee: UKTaxiCalculatorLibrary) {}

  calculatePriceInEuros(km: number, isAirport: boolean): number {
    const miles = km * 1.609;
    const fare = isAirport ? Fares.Airport : Fares.Standard;
    const pounds = this.adaptee.getPriceInPounds(miles, fare);

    return  pounds * 1.15;
  }
}

// Client
function client(taxiCalculator: TaxiCalculator): void {
  console.log('Calculating the price for a 15 Km run to the airport');
  const priceInEuros = taxiCalculator.calculatePriceInEuros(15, true);
  console.log(`Total price: ${priceInEuros}€`);
}

const ukTaxiCalculatorLibrary = new UKTaxiCalculatorLibrary();
const ukTaxiCalculatorLibraryAdapter = new UKTaxiCalculatorLibraryAdapter(ukTaxiCalculatorLibrary);
client(ukTaxiCalculatorLibraryAdapter)