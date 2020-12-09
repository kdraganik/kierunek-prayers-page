import { useState } from 'react';
import styled from 'styled-components';

import MainForm from './components/MainForm';
import ThxForm from './components/ThxForm';
import AskForm from './components/AskForm';

const App = () => {
  const [display, setDisplay] = useState('');
  const [thx, setThx] = useState('');
  const [ask, setAsk] = useState('');

  console.log(display);
  
  return(
    <Wrapper display={ display }>
      <ThxForm value={ thx } setValue={ setThx } display={ display } setDisplay={ setDisplay }/>
      <AskForm value={ ask } setValue={ setAsk } display={ display } setDisplay={ setDisplay }/>
      <MainBox>
        <Container>
          <Heading2>Karta modlitwy</Heading2>
          <BigLogo/>
        </Container>
        <MainForm display={ display }/>
        <Container>
          <ButtonBox>
            <ButtonBlack onClick={ () => setDisplay('THX') }>Dziękuję za</ButtonBlack>
            <ButtonWhite onClick={ () => setDisplay('ASK') }>Proszę o</ButtonWhite>
          </ButtonBox>
          <SubmitBox>
            { (thx || ask) && <ButtonSubmit>Wyślij</ButtonSubmit> }
          </SubmitBox>
        </Container>
      </MainBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  color: #231F20;
  ${props => props.display === 'THX'
    ? 'align-items: flex-end;'
    : props.display === 'ASK'
    ? 'align-items: flex-start;'
    : 'align-items: center;'
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Heading2 = styled.h2`
  font-size: 2.4rem;
  text-align: center;
`;

const BigLogo = styled.img.attrs({
  src: "./logo_black.svg"
})`
  margin-bottom: 4rem;
  width: 14rem;
  height: auto;
`;

const ButtonBox = styled.div`
  margin-top: .5rem;
  width: 45%;
  display: flex;
  justify-content: space-between;
`;

const SubmitBox = styled.div`
  margin-top: .5rem;
  width: 45%;
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1.2rem;
  width: 180px;
  height: 2.8rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 2px;
  
  transition: all .3s ease-out;
`

const ButtonSubmit = styled(Button)
`
  border: 2px solid #231F20;
  background-color: #fff;
  transition: all .3s ease-out;

  &:hover{
    background-color: #231F20;
    color: #fff;
  }
`

const ButtonBlack = styled(Button)`
  background-color: #231F20;
  color: #fff;
  box-shadow: 0 2px 3px rgba(0,0,0,0.12), 0 2px 3px rgba(0,0,0,0.24);

  &:hover{
    box-shadow: 0 8px 16px rgba(0,0,0,0.19), 0 5px 5px rgba(0,0,0,0.23)
  }
`;

const ButtonWhite = styled(Button)`
  background-color: #fff;
  color: #231F20;
  box-shadow: 0 2px 3px rgba(0,0,0,0.12), 0 2px 3px rgba(0,0,0,0.24);

  &:hover{
    box-shadow: 0 8px 16px rgba(0,0,0,0.19), 0 5px 5px rgba(0,0,0,0.23)
  }
`;

export default App;