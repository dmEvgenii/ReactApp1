import React,  {Component} from 'react'
import img from '../images/ffff.jpg'

const styles ={
  image:{
    width:100,
    height:75
  }

}


class Logo extends Component {
  render(){
    return(
      <div>
      <img src={img} style={styles.image}></img>
      </div>
    )
  }
}
export default Logo
