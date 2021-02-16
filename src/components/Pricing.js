import NumberFormat from 'react-number-format';

const Pricing = (props) => {
    return (
      <div class="pricing">
        <h4 class="wasArea"> RRP <NumberFormat thousandSeparator={true} displayType={'text'} prefix={'£'} value={props.wasPrice}/> <span class="wasPrice"> £{props.wasPrice} </span></h4>
        
        <h4 class="currentPrice"> £{props.currentPrice} </h4>
        <h4 class="saveTitle">Save <span class="savePrice"> £{props.saving} </span></h4>
      </div>
    )
  }

  export default Pricing;