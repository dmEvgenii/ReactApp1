import React,  {Component} from 'react'
import data from '../../data/Events.json'

import '../../styles/normalize.css';
import '../../styles/registrationPage.css';
import '../../styles/styles.css';
import img from '../../styles/images/bb.png';

console.log(data);

class EventList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data: data
    }
  }

  render() {

    return(
      Object.keys(this.state.data.events).map(item =>
        <div class="sport-block">
        <div class=" sport-block__first-block first-block">
                    <img src={img} className="fitst-block__bb"></img>
                    <div class="first-block__info info">
                        <span class="info__title">{this.state.data.events[item].sport}</span>
                        <span class="info__description">{this.state.data.events[item].place}</span>
                        <span class="info__date">{this.state.data.events[item].date}</span>
                    </div>
                </div>

                <div class="sport-block__users users">
                <img src="./images/Avatar.png" class="users__avatar"></img>
                <img src="./images/Group2.png" class="users__avatar"></img>
                <img src="./images/Group3.png" class="users__avatar"></img>
                <img src="./images/Group4.png" class="users__avatar"></img>
                <img src="./images/Group5.png" class="users__avatar"></img>
            </div>
            <span class="sport-block__count">5 участников</span>
            <div class="sport-block__btn-block btn-block">
                <button class="btn-block__first">Участвовать</button>
                <button class="btn-block__second">Подробнее</button>
            </div>
            </div>

              )


    )
  }
}

export default EventList
