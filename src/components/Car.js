import Pricing from './Pricing'
import Details from './Details'

const Car = (props) => {
    return (
      <div class="postArea">
        <div class="carImg">
          <img src = {props.srcImg} alt = {props.name}/>
        </div>
        <Pricing wasPrice = {props.wasPrice} 
            currentPrice = {props.currentPrice} 
            saving = {props.wasPrice - props.currentPrice}/>
  
        <Details title = {props.title} doorNum = {props.doorNum}
        transOpt = {props.transOpt}
        fuelType = {props.fuelType}
        bodyType = {props.bodyType}
        carStatus = {props.carStatus}
        stockStatus = {props.stockStatus}/>
      </div>
    )
}

  export default Car;