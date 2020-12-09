import styled from "styled-components";

const AskForm = ({ value, setValue, display, setDisplay}) => {
  return (
    <Wrapper show={ display === 'ASK' }>
      <Arrow onClick={ () => setDisplay('') }/>
      <Heading3>Proszę o...</Heading3>
      <TextBox 
        value={ value } 
        onChange={ e => setValue(e.target.value) } 
        ref={input => display === 'ASK' ? input && input.focus() : ''}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${props => props.show ? 'display: block' : 'display: none'};
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background-color: #fff;
  color: #231F20;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  transition: all .4s ease-out;
`;

const Heading3 = styled.h3`
  margin-top: 2em;
  margin-left: 2em;
  font-size: 1.8rem;
`;

const TextBox = styled.textarea`
  margin-left: 3em;
  padding: 1em;
  border: none;
  outline: none;
  resize: none;
  background-color: #fff;
  color: #231F20;
  font-size: 2em;
  line-height: 150%;
  width: calc(100% - 6em);
  height: 70%;
`;

const Arrow = styled.div`
	width: 1.2em;
	height: 1.2em;
	box-sizing: border-box;
	position: absolute;
	left: 1em;
	top: 1em;
  transform: rotate(45deg);
  cursor: pointer;
	
	:before {
		content: '';
		width: 100%;
		height: 100%;
		border-width: .3em .3em 0 0;
		border-style: solid;
		border-color: #231F20;
		transition: .2s ease;
		display: block;
		transform-origin: 100% 0;
	}

	
	:after {
		content: '';
		float: left;
		position: relative;
		top: -100%;
		width: 100%;
		height: 100%;
		border-width: 0 .3em 0 0;
		border-style: solid;
		border-color: #231F20;
		transform-origin: 100% 0;
		transition:.2s ease;
  }
  
  :hover{
    transform: scale(1.1) rotate(45deg);
  }
`

export default AskForm;