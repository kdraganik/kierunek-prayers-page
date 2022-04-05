import { useRef, useState } from 'react';
import styled from 'styled-components';

import MainForm from './components/MainForm';
import ThxForm from './components/ThxForm';
import AskForm from './components/AskForm';
//import Navbar from './components/Navbar';

const App = () => {
  const [display, setDisplay] = useState('');
  const [showLoader, setShowLoader] = useState('');
  const [sending, setSending] = useState(false);
  const [thx, setThx] = useState('');
  const [ask, setAsk] = useState('');
  const [name, setName] = useState('');

  const wrapperRef = useRef();
  const thxButtonRef = useRef();
  const askButtonRef = useRef();
  const thxFormRef = useRef();
  const askFormRef = useRef();
  const thxSaveButtonRef = useRef();
  const askSaveButtonRef = useRef();
  const sendButtonRef = useRef();

  const handleClick = (e) => {
    console.log(thxFormRef);
    if(e.target === thxButtonRef.current || (e.target !== thxSaveButtonRef.current && thxFormRef.current.contains(e.target))){
      setDisplay('THX');
    }
    else if(e.target === askButtonRef.current || (e.target !== askSaveButtonRef.current && askFormRef.current.contains(e.target))){
      setDisplay('ASK');
    }
    else if(e.target === sendButtonRef.current){
      sendData();
    }
    else{
      setDisplay('');
    }
  }

  const sendData = async () => {
    setShowLoader(true);

    const data = {
      name, 
      thx,
      ask
    }

    try{
      await addCard(data);

      setShowLoader(false);
      setDisplay('');
      setName('');
      setThx('');
      setAsk('');

      setSending(true);
      setTimeout(() => {
        setSending(false);
      }, 5000);
    }
    catch(err){
      setDisplay('ERR');
      setShowLoader(false);
      console.log(err);
    }
  }
  
  return(
    <Wrapper vh={ window.innerHeight * 0.01 } ref={ wrapperRef } onClick={ handleClick }>
      {/* <Navbar /> */}
      <ThxForm
        saveButtonRef={ thxSaveButtonRef }
        thxRef={ thxFormRef } 
        value={ thx } setValue={ setThx } 
        display={ display }
      />
      <AskForm
        saveButtonRef={ askSaveButtonRef }
        askRef={ askFormRef } 
        value={ ask } 
        setValue={ setAsk } 
        display={ display } 
      />
      <MainBox display={ display }>
        <Container>
          <Heading2>Karta modlitwy</Heading2>
          <BigLogo/>
        </Container>
        <MainForm value={ name } setValue={ setName }/>
        <Container>
          <ButtonBox>
            <ButtonBlack ref={ thxButtonRef }>Dziękuję za</ButtonBlack>
            <ButtonWhite ref={ askButtonRef }>Proszę o</ButtonWhite>
          </ButtonBox>
          <SubmitBox>
            { !showLoader && (thx || ask) && <ButtonSubmit ref={ sendButtonRef }>Wyślij</ButtonSubmit> }
            { sending && <SendNotice>Twoja karta została wysłana!</SendNotice> }
            { showLoader && <Loader><div></div><div></div><div></div><div></div></Loader> }
          </SubmitBox>
          { display === 'ERR' && (<div style={{textAlign: "center", color: "red"}}>Coś poszło nie tak. Proszę spróbować ponownie.</div>) }
        </Container>
      </MainBox>
    </Wrapper>
  )
}

const addCard = async (payload) => {
  const axios = require('axios');

  const { data } = await axios.post('/api/card', payload);

  return data;
}

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  background-color: #E8E3E0;
  color: #231F20;
  overflow: hidden;

  @media (max-width: 992px) { 
    font-size: 0.85em;
  }
  @media (max-width: 576px) { 
    font-size: 0.7em;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => props.display === 'THX' 
    ? 'margin: 0 0 0 50%;'
    : props.display === 'ASK'
    ? 'margin: 0 50% 0 0;'
    : 'margin: 0 25% 0 25%;'} 
  transition: all .4s ease-out;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const Heading2 = styled.h2`
  font-size: 2.4em;
  text-align: center;
`;

const BigLogo = styled.img.attrs({
  src: "./logo_black.svg"
})`
  margin-bottom: 3rem;
  width: 14rem;
  height: auto;
`;

const ButtonBox = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SubmitBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 180px;
  height: 2.8rem;
  margin: 0 1.5rem 1rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 2px;
  transition: all .3s ease-out;
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

const SendNotice = styled.h3`
  margin-top: .5rem;
  font-size: 1.2em;
  text-align: center;
`;

const Loader = styled.div`
  display: inline-block;
  position: relative;
  height: 40px;
  width: 78px;

  & div {
    position: absolute;
    top: 13px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #231F20;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export default App;