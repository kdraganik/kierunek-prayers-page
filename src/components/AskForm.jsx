import { useRef, useEffect } from "react";
import styled from "styled-components";

const AskForm = ({ saveButtonRef, askRef, value, setValue, display}) => {
  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if(display === 'ASK')
        inputRef.current.focus()
    }, 500)
  }, [display]);

  return (
    <Wrapper ref={ askRef } show={ display === 'ASK' }>
      <Heading3>Proszę o...</Heading3>
      <TextBox
        ref = { inputRef }
        value={ value } 
        onChange={ e => setValue(e.target.value) }
      />
      { value && <SaveButton ref={ saveButtonRef }>Zapisz</SaveButton> }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: ${props => props.show ? '0' : '-55%'};
  height: 100%;
  width: 50%;
  background-color: #fff;
  color: #231F20;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  transition: all .4s ease-out;
  z-index: 2;

  @media (max-width: 768px) { 
    width: 90%;
    right: ${props => props.show ? '0' : '-95%'};
  }
`;

const Heading3 = styled.h3`
  margin-top: 1.5em;
  margin-left: 1.5em;
  font-size: 2em;

  @media (max-width: 768px) { 
    margin-top: 1em;
    margin-left: 1em;
  }
`;

const TextBox = styled.textarea`
  padding: 1em 2.2em;
  border: none;
  outline: none;
  resize: none;
  background-color: #fff;
  color: #231F20;
  font-family: 'Poppins', sans-serif;
  font-size: 2em;
  line-height: 150%;
  width: calc(100% - 6em);
  height: 70%;
  width: 100%;

  @media (max-width: 768px) { 
    padding: .5em 1.5em;
  }
`;

const SaveButton = styled.div`
  display: none;
  position: absolute;
  left: 1em;
  bottom: 3em;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 120px;
  height: 2.8rem;
  margin: 0 1.5rem 1rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 2px;
  background-color: #231F20;
  color: #fff;
  box-shadow: 0 2px 3px rgba(0,0,0,0.12), 0 2px 3px rgba(0,0,0,0.24);
  transition: all .3s ease-out;

  &:hover{
    box-shadow: 0 8px 16px rgba(0,0,0,0.19), 0 5px 5px rgba(0,0,0,0.23)
  }

  @media (max-width: 768px) { 
    display: flex;
  }
`

export default AskForm;