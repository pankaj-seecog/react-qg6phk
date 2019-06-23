import React,{Component} from 'react';

class Hospital extends Component{

constructor(){
  this.state = {
    hospital_name : "Appolo",
    rank : 3,
    doctors : ["Mr Mohan","Mr Sohan","Mr Rohan"]
  }
}

render(){
  return (
    <div>
Hospital Name : {this.state.hospital_name}<br/>
Rank : {this.state.rank}
<hr/>
<ul>
{
  this.state.doctors.map((doc)=>{
    return (
      <h6>{doc}</h6>
    )
  })
}
</ul>
    </div>
  )
}


}

export default Hospital;