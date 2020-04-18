import React from 'react'

class ButtonChat extends React.Component{
    render(){
        return(
            <button onClick= {this.props.onClickButton}>Enviar</button>
        );
    }
}
export default ButtonChat