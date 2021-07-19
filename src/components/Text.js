import React,  {Component} from 'react'


class Text extends Component{
  constructor(props){
    super(props)
    this.state={
      isOpen:true
    }
  }

    render() {
      const {tag} = this.props
      const body = this.state.isOpen && <section>AAAAAAA</section>
    return(
      <div>
      <h2>
      <button onClick={this.handleClick}>
        {this.state.isOpen ? 'Open' : "Close"}
      </button>
      {body}
     </h2>
      </div>
      
    )
  }
  handleClick = () =>{
    console.log('===','clicked')
    this.setState({isOpen: !this.state.isOpen})
  }
}


export default Text
