import styled from "styled-components";

const MainForm = ({ value, setValue }) => {
  return (
    <Wrapper>
      <InputBox>
        <LabelPerson>Imię</LabelPerson>
        <InputPerson value={ value } onChange={ e => setValue(e.currentTarget.value) } />
      </InputBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputBox = styled.div`
  width: 40%;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) { 
    width: 50%;
  }
  @media (max-width: 992px) { 
    width: 60%;
  }
  @media (max-width: 768px) { 
    width: 75%;
  }
`;

const Label = styled.label`
  display: block;
  margin-right: .5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: .2rem;
  font-size: 2.4rem;
  outline: none;
  :focus{
    border-bottom: 1px solid black;
  }
`;

const LabelPerson = styled(Label).attrs({
  htmlFor: 'person'
})``;

const InputPerson = styled(Input).attrs({
  id: 'person',
  type: 'text'
})`
${props => props.value === '' ? 'border-bottom: 1px solid black;' : ''}
`;

export default MainForm;