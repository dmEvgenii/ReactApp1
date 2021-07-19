import React from 'react'
import Logo from './Logo.js'
import Buttons from './RegistrationPage/Button.js'
import ButtonIn from './RegistrationPage/ButtonIn.js'

const styles ={
  cont:{
    float:'left'
  },
  buttonIn:{
    float:'right'
  },
  buttons:{
    float:'left'
  },

  table:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  }
}


function Head() {
    return(
      <div style={styles.table}>

        <Logo/>

        <Buttons/>



        <ButtonIn/>

      </div>

    )
}

export default Head
