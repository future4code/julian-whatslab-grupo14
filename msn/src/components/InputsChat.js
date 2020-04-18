import React from 'react'

class InputsChat extends React.Component {
    render(){
    return(
        <input value = {this.props.valor} onChange= {this.props.onChange} placeholder= {this.props.nomePlaceHolder} />
    );
}
}
export default InputsChat