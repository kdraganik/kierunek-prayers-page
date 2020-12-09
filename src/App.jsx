import styled from 'styled-components';

const App = () => {      
  return(
    <Wrapper>
      Prayers page
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  color: #231F20;
`; 

export default App;