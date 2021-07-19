import React,  {Component} from 'react'
import RightBox from './RightBox'

import LeftBox from './LeftBox.js'



const styles ={
  table:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    //backgroundImage: `url(${img})`,
    width: '80%',
    backgroundSize: 'cover',
    margin: 'auto'
  }
}


function RegistrationPage(){

  return(
    <div style = {styles.image}>
      <div style ={styles.table}>

      <LeftBox/>
      <RightBox/>

      </div>
    </div>
    )



}

export default RegistrationPage
