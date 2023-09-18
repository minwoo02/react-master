import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateAnimation} 2s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 40px;
    }
    &:active {
      opacity: 0;
    }
  }
  /* span: hover {
    font-size: 40px;
  }
  span: active {
    opacity: 0;
  } */
`;

function App() {
  return (
    <Father>
      <Box>
        <span>😁</span>
      </Box>
    </Father>
  );
}

export default App;
