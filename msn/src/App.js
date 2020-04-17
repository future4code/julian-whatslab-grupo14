import React from 'react';
import './App.css';
import styled from 'styled-components'
import InputsChat from './components/InputsChat'
import ButtonChat from './components/ButtonChat'

const ChatContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`
const Chat = styled.div`
  display: grid;
  grid-template-rows: 90vh 9vh;
  width: 50vw;
  border: 1px solid black;
`
const InputButtonContainer = styled.div`
  background: red;
  grid-area: 2/1/2/1;
  display: flex;
`

class App extends React.Component {
  state = {

    valorInputUsuario: "",
    valorInputMensagem: ""
  }

  onchangetUsuario = (event) => {
    this.setState({
      valorInputUsuario: event.target.value
    })
    console.log("aaa")
  }

  onChangeChat = (event) => {
    this.setState({
      valorInputMensagem: event.target.value
    })
    console.log("bbb")
  }

  render() {
    return (
      <ChatContainer>
        <Chat>
          <InputButtonContainer>
            <InputsChat valor={this.state.valorInputUsuario} onChange={this.onChangeUsuario} nomePlaceHolder="Nome" />
            <InputsChat valor={this.state.valorInputMensagem} onChange={this.onChangeChat} nomePlaceHolder="Mensagem" />
            <ButtonChat />
          </InputButtonContainer>
        </Chat>
      </ChatContainer>

    );
  }
}

export default App;
