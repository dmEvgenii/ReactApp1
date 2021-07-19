import React,  {Component} from 'react'
import '../../styles/registrationPage.css';
import {Link} from 'react-router-dom';


const styles = {
  button:{
    backgroundColor:'#ff8700',
    borderColor:'#ff8700',
    boxShadow: '0 0 10px #ff8700'
  }
}


class ButtonIn extends Component{
  constructor(props){
    super(props)
    this.state={
      urls:''
    }
  }

HandleClick(){
  window.open('/Event.html');
}

    render() {
      const {tag} = this.props
    return(
      <div className="regDiv">

      <button id="RegButton" className="btn btn-primary inbutton" onClick={
        () => this.HandleClick()
      }>
Войти
      </button>

      </div>

    )
  }

}


export default ButtonIn
