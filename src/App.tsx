import tw from "twin.macro";
import styled from "styled-components";

const Button = styled.button`
  ${tw`
    bg-transparent
    rounded-sm
    border
    border-blue-500
    text-blue-500
    border-solid
    m-1
    px-4
    py-1
  `}
`;

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Button</Button>
    </div>
  );
}

export default App;
