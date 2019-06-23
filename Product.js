import React,{Component} from 'react';

class Product extends Component{

constructor(){
  this.state = {
    product_name : "Apple",
    product_cost : 235
  }
}

render(){
  return (
<div>
Product Name : {this.state.product_name} <br/>
Product Cost : {this.state.product_cost}
</div>
  )
}

}
export default Product;