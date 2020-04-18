import React from 'react';
import './App.css';
import styled from 'styled-components'
import InputsChat from './components/InputsChat'
import ButtonChat from './components/ButtonChat'

const Mensagens = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;

`
const ChatContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`
const Chat = styled.div`
  display: grid;
  grid-template-rows: 95vh 4vh;
  width: 50vw;
  border: 1px solid black;
`
const InputButtonContainer = styled.div`
  grid-area: 2/1/2/1;
  display: grid;
  grid-template-columns: 25% 55% 1fr;
`


class App extends React.Component {
  state = {
    mensagens: [{ usuario: "Melissa", mensagem: "Olá!" }],
    valorInputUsuario: "",
    valorInputMensagem: ""
  }

  onChangeUsuario = (event) => {
    this.setState({
      valorInputUsuario: event.target.value
    })
  }

  onChangeChat = (event) => {
    this.setState({
      valorInputMensagem: event.target.value
    })
  }

  adicionarMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };
    const arrayMensagens = [novaMensagem, ...this.state.mensagens];

    this.setState({ mensagens: arrayMensagens, valorInputMensagem: "" });
  };

  render() {
    const listaDeComponentes = this.state.mensagens.map((cadaMensagem) => {
      return (
        <p>
          {cadaMensagem.usuario} - {cadaMensagem.mensagem}
        </p>
      );
    });

    return (
      <ChatContainer>
        <Chat>
          <Mensagens>{listaDeComponentes}</Mensagens>
          <InputButtonContainer>
            <InputsChat
              tamanho={'50%'}
              valor={this.state.valorInputUsuario}
              onChange={this.onChangeUsuario} nomePlaceHolder="Nome"
            />
            <InputsChat
              tamanho={'40%'}
              valor={this.state.valorInputMensagem}
              onChange={this.onChangeChat} nomePlaceHolder="Mensagem"
            />
            <ButtonChat onClickButton={this.adicionarMensagem} />
          </InputButtonContainer>
        </Chat>
      </ChatContainer>

    );
  }
}

export default App;

/*
import React from "react";

class ComponenteInputs extends React.Component {
    state = {
      mensagens: [{usuario: "Melissa", mensagem:"Olá!"}
      ],
      valorInputUsuario: "",
      valorInputMensagem: ""
    };

    adicionarMensagem = () => {
      const novaMensagem = {
        usuario: this.state.valorInputUsuario,
        mensagem: this.state.valorInputMensagem
      };

      const arrayMensagens = [...this.state.mensagens, novaMensagem];

      this.setState({ mensagens: arrayMensagens });
    };

    onChangeInputUsuario = (event) => {

      this.setState({ valorInputUsuario: event.target.value });
    };

    onChangeInputMensagem = (event) => {

      this.setState({ valorInputMensagem: event.target.value });
    };

    render() {
      const listaDeComponentes = this.state.mensagens.map((cadaMensagem) => {
        return (
          <p>
            {cadaMensagem.usuario} - {cadaMensagem.mensagem}
          </p>
        );
      });

      return (
        <div>
          <div>{listaDeComponentes}</div>

          <div>
            <input
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"usuário"}
            />
            <input
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Digite sua mensagem"}
            />
            <button onClick={this.adicionarMensagem}>ENVIAR</button>
          </div>
        </div>
      );
    }
  }

  export default ComponenteInputs;
*/
