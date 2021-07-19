import React,  {Component} from 'react'
import '../../styles/registrationPage.css';

class Buttons extends Component{
  constructor(props){
    super(props)
    this.state={
      urls:{
        url1:'aa',
        url2:'bb',
        url3:'cc'
      },
      style:{
        display:'flex',
        alignItems:'center'
      },
      button:{
        border:"none",
        backgroundColor:"white"
      }
    }
  }

    render() {

    return(
    <div style={this.state.style} >
      <div>
          <button className="a"> Главная </button>

      </div>
      <div>
        <button className="a" style={this.state.button}>Спортплощадки</button>
      </div>
      <div>
        <button className="a" style={this.state.button}>О нас</button>
      </div>
    </div>

    )
  }

}


export default Buttons
