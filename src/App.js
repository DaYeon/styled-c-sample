import React, { Component, Fragment } from 'react';
import styled, { css, keyframes } from 'styled-components';
import GlobalStyle from './globalStyle.js';


class App extends Component {
  render() {
    return (
      <Container>
        <Button>HELLO</Button>
        <Button danger rotationTime={5}>HELLO</Button>
        <Anchor href="http://google.co.kr">Go to googles</Anchor>
        <GlobalStyle />
      </Container>
    );
  }
}


const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus{
    outlines: none;
  }
  background-color: ${props => props.danger ? "#d63031" : "#00b894"};
  ${props => {
    if(props.danger){
      return css`animation: ${rotation} ${props.rotationTime}s linear infinite;`
    }
  }}
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default App;
