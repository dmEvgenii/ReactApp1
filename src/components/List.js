import React,  {Component} from 'react'
import data from '../data/data.json'


class PersonList extends  Component {

  constructor(props){
    super(props)
    this.state={
      data: data
    }
  }

  render() {


    return (
      <div>
        <h1>Heading</h1>
        <p>
        <ul>
        {
        Object.keys(this.state.data.persons).map(item => <h1>{this.state.data.persons[item].name}</h1>)
        }


        </ul>
        </p>
       </div>
      )
    }

}
export default PersonList
