import React,  {Component} from 'react'


const styles ={
  table:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
  }
}


class RightBox extends Component {
  handleClick(){
    console.log('ddd', this)
  }

  render(){
    return(
      <div style = {styles.table}>
        <input className="form-control" name="name" rows="1" cols="20" placeholder="Имя"></input>
        <input className="form-control" name="mail" rows="1" cols="20" placeholder="E-mail"></input>
        <input className="form-control" name="phoneNumber" rows="1" cols="20" placeholder="Телефон"></input>
        <input className="form-control" name="passwor" rows="1" cols="20" placeholder="Пароль"></input>
        <input className="form-control" name="repeatPassword" rows="1" cols="20" placeholder="Подтверждение пароля"></input>
        <button className="btn btn-primary" onClick={() => this.handleClick()}>Зарегистрироваться</button>
      </div>
    )
  }
}
export default RightBox
