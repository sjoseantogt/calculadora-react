import React from 'react'

class NButton extends React.Component{
    constructor(props){
        super(props)
    }

handleClick = () => {
    
    let buttonpress = {
        type: this.props.value
    }
    this.props.handlerButton(buttonpress)
}

render(){
    return(
        <div className = {this.props.classn}>
            <button onClick={this.handleClick}> {this.props.value} </button>
        </div>
    )
}
}

export default NButton