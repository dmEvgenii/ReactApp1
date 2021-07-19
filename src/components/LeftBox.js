import React,  {Component} from 'react'
import img from '../images/ffff.jpg'



const styles ={
  image:{

    width: '50%',

  }
}

function LeftBox() {
    return(
      <div style= {styles.image}>
        <h1>
          Присоединяйся к команде
          и организуй совместные
          занятия спортом.
        </h1>
        <h3>
          Наш сервис поможет найти место и собрать
          команду единомышленников для занятий.
        </h3>
      </div>

    )
}
export default LeftBox
