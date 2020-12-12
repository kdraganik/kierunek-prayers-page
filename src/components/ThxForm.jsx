import { useRef, useEffect } from "react";
import styled from "styled-components";

const ThxForm = ({ value, setValue, display}) => {
  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if(display === 'THX')
        inputRef.current.focus()
    }, 500)
  }, [display]);

  return (
    <Wrapper show={ display === 'THX' }>
      <Heading3>Dziękuje za...</Heading3>
      <TextBox
        ref = { inputRef }
        value={ value } 
        onChange={ e => setValue(e.target.value) } 
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.show ? '0' : '-55%'};
  height: 100%;
  width: 50%;
  background-color: #231F20;
  color: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  transition: all .4s ease-out;
  z-index: 2;

  @media (max-width: 768px) { 
    width: 90%;
    left: ${props => props.show ? '0' : '-95%'};
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
  background-color: #231F20;
  color: #fff;
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

export default ThxForm;