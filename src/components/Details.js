const Details = (props) => {
    return (
      <div class="carDetails">
      <div class="carInfoArea">
        <h1 class="carTitle">{props.title}</h1>
        <h2 class="carFeatures">
          <span>{props.doorNum} door </span> 
          <span>{props.transOpt} </span> 
          <span>{props.fuelType} </span> 
          <span>{props.bodyType}</span> 
        </h2>
      </div>
      <div class="Status">
        <h5>{props.carStatus} - {props.stockStatus}</h5>
      </div>
      </div>
    )
  }

export default Details;