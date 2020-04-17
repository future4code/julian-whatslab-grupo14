import React from 'react'
import styled from 'styled-components'

class InputsChat extends React.Component {
    render(){
    return(
        <input value = {this.props.valor} onChange= {this.props.onChange} placeholder= {this.props.nomePlaceHolder} />
    );
}
}
export default InputsChat