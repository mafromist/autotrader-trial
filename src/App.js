import React from 'react';
import audi from './audirs3.jpg'
import mercedes from './mercgla.jpg'
import vw from './vwgolf.jpg'
import volvo from './volvoxc40.jpg'
import Car from './components/Car'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './App.css';


class App extends React.Component {

  state = {
    cars: [
      {
        id: 1,
        name: "Mercedes GLA",
        srcImg: mercedes,
        wasPrice: 28000,
        currentPrice: 24495,
        title: "Mercedes-Benz GLA 250 4Matic AMG Line Premium Plus 5dr",
        doorNum: 5,
        transOpt: "Automatic",
        fuelType: "Petrol",
        bodyType: "SUV",
        carStatus: "used",
        stockStatus: "in stock"
      },
      {
        id: 2,
        name: "Audi RS3",
        srcImg: audi,
        wasPrice: 32000,
        currentPrice: 30950,
        title: "Audi RS3 2.5 TFSI Sportback S Tronic quattro 5dr (Nav)",
        doorNum: 5,
        transOpt: "Automatic",
        fuelType: "Petrol",
        bodyType: "Hatchback",
        carStatus: "used",
        stockStatus: "in stock"
      },
      {
        id: 3,
        name: "VW Golf",
        srcImg: vw,
        wasPrice: 34975,
        currentPrice: 32475,
        title: "Volkswagen Golf 2.0 TDI R-Line DSG (s/s) 5dr",
        doorNum: 5,
        transOpt: "Automatic",
        fuelType: "Petrol",
        bodyType: "Hatchback",
        carStatus: "brand new",
        stockStatus: "in stock"
      },
      {
        id: 4,
        name: "Volvo XC40",
        srcImg: volvo,
        wasPrice: 35499,
        currentPrice: 32499,
        title: "Volvo XC40 1.5 T5 [262] Hybrid Inscription",
        doorNum: 5,
        transOpt: "Automatic",
        fuelType: "Petrol",
        bodyType: "SUV",
        carStatus: "used",
        stockStatus: "in stock"
      }
    ]
  }

  render() {
    const eachCar = this.state.cars.map((car) => {
      return <Car key={car.id} name={car.name} srcImg={car.srcImg} wasPrice={car.wasPrice} currentPrice={car.currentPrice}
        title={car.title} doorNum={car.doorNum} transOpt={car.transOpt} fuelType={car.fuelType} bodyType={car.bodyType} 
        carStatus={car.carStatus} stockStatus={car.stockStatus} />
    })

    return (
      <div className="App">
        <div class="mainCont">
          <div class="titleArea">
            <h1>Latest brand new car deals</h1>
            <h2>View more deals <FontAwesomeIcon icon={faArrowRight} /> </h2>
          </div>
          <div class="carConts">
            {eachCar}
          </div>
        </div>
      </div>
    );
  }}

  export default App;
