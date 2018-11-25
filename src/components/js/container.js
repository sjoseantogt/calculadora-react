import React from 'react'
import NButton from './numbers'
import '../css/container.css'

var cont = 0

class Container extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            buttons: this.setButtons(),
            savednumber: "0",
            newnumber: "0",
            flag: true,
            operador: ""
        }
    }

setButtons = () =>{
    let buttonArray = [
    <NButton classn = "C" value="C" handlerButton={this.handlerButton}/>,
    <NButton classn = "oper" value={"/"} handlerButton={this.handlerButton}/>,
    <NButton classn = "num" value={"7"} handlerButton={this.handlerButton}/>,
    <NButton classn = "num" value={"8"} handlerButton={this.handlerButton}/>,
    <NButton classn = "num" value={"9"} handlerButton={this.handlerButton}/>,
    <NButton classn = "oper" value={"*"} handlerButton={this.handlerButton}/>,
    <NButton classn = "num" value={"4"} handlerButton={this.handlerButton}/>,
    <NButton classn = "num" value={"5"} handlerButton={this.handlerButton}/>,
    <NButton classn = "num" value={"6"} handlerButton={this.handlerButton}/>,
    <NButton classn = "oper" value={"-"} handlerButton={this.handlerButton}/>,
    <NButton classn = "num" value={"1"} handlerButton={this.handlerButton}/>,
    <NButton classn = "num" value={"2"} handlerButton={this.handlerButton}/>,
    <NButton classn = "num" value={"3"} handlerButton={this.handlerButton}/>,
    <NButton classn = "oper" value={"+"} handlerButton={this.handlerButton}/>,
    <NButton classn = "zero" value={"0"} handlerButton={this.handlerButton}/>,
    <NButton classn = "num" value={"."} handlerButton={this.handlerButton}/>,
    <NButton classn = "oper" value={"="} handlerButton={this.handlerButton}/>
    ]
    return buttonArray
}

handlerButton = (buttonpress) =>{

    if (buttonpress.type == "=" && cont >= 1){
        cont = 0

        if(this.state.operador == "+"){
            let num = parseFloat(this.state.savednumber) + parseFloat(this.state.newnumber)
            if(num.toString().length > 9 || num < 0){
                this.setState({savednumber: "ERROR"})
            }else{
                this.setState({savednumber: num})    
            }
        }

        else if(this.state.operador == "-"){
            let num = parseFloat(this.state.savednumber) - parseFloat(this.state.newnumber)
            if(num.toString().length > 9 || num < 0){
                this.setState({savednumber: "ERROR"})
            }else{
                this.setState({savednumber: num})    
            }
        }

        else if(this.state.operador == "*"){
            let num = parseFloat(this.state.savednumber) * parseFloat(this.state.newnumber)
            if(num.toString().length > 9 || num < 0){
                this.setState({savednumber: "ERROR"})
            }else{
                this.setState({savednumber: num})    
            }
        }

        else if(this.state.operador == "/"){
            let num = parseFloat(this.state.savednumber) / parseFloat(this.state.newnumber)
            if(num.toString().length > 9 || num < 0){
                this.setState({savednumber: "ERROR"})
            }else{
                this.setState({savednumber: num})    
            }
        }
        this.setState({flag: true})
        this.setState({newnumber: 0})
    }

    else if(buttonpress.type == "C"){
        this.setState({flag: true})
        this.setState({savednumber: 0})
        this.setState({newnumber: 0})
        this.setState({operador: ""})
    }


    else if(buttonpress.type == "+" || buttonpress.type == "-" || buttonpress.type == "*" || buttonpress.type == "/"){
        if (cont > 0 && this.state.flag == true){
            cont = 0
            this.setState({flag: false})
            this.setState({operador: buttonpress.type})
        
        }else if(cont > 0 && this.state.flag == false){
            cont = 0
            if(this.state.operador == "+"){
                let num = parseFloat(this.state.savednumber) + parseFloat(this.state.newnumber)
                if(num.toString().length > 9 || num < 0){
                    this.setState({savednumber: "ERROR"})
                }else{
                    this.setState({savednumber: num})    
                }
            }
    
            else if(this.state.operador == "-"){
                let num = parseFloat(this.state.savednumber) - parseFloat(this.state.newnumber)
                if(num.toString().length > 9 || num < 0){
                    this.setState({savednumber: "ERROR"})
                }else{
                    this.setState({savednumber: num})    
                }
            }
    
            else if(this.state.operador == "*"){
                let num = parseFloat(this.state.savednumber) * parseFloat(this.state.newnumber)
                if(num.toString().length > 9 || num < 0){
                    this.setState({savednumber: "ERROR"})
                }else{
                    this.setState({savednumber: num})    
                }
            }
    
            else if(this.state.operador == "/"){
                let num = parseFloat(this.state.savednumber) / parseFloat(this.state.newnumber)
                if(num.toString().length > 9 || num < 0){
                    this.setState({savednumber: "ERROR"})
                }else{
                    this.setState({savednumber: num})    
                }
            }
            this.setState({flag: false})
            this.setState({newnumber: 0})
        }

    }else if(cont < 9 ){
        if(cont == 0){
            this.setState(this.state.flag ? 
                { savednumber: buttonpress.type} :
                { newnumber: buttonpress.type})

                cont ++

        }else{
        this.setState(this.state.flag ? 
            {savednumber: (this.state.savednumber).concat(buttonpress.type)}:
            {newnumber: (this.state.newnumber).concat(buttonpress.type)})
            cont ++
        }
    }

}

render(){

    return(
        <div>
            <h1>Calculadora</h1>
            <div className='container'>
                <div className = "display">
                    <p> {this.state.flag ? this.state.savednumber : this.state.newnumber } </p>
                </div>
                {this.state.buttons}
            </div>
        </div>
        )
    }
}

export default Container