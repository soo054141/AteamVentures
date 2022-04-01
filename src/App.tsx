import { myTheme } from "./styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { Container } from "./components/Container";
import Header from "./components/Header/Header";

const TestType = {
  Error: "error3",
  Button: "Button"
} as const;

type TestTypeDeclare = typeof TestType[keyof typeof TestType];

interface TestInterface {
  type: TestTypeDeclare;
}

const Test = styled.div`
  width: 100px;
  height: 100px;
  ${({ type }: TestInterface) => (type === TestType.Button ? `border: 1px solid red` : ``)};

  background-color: ${(props) => props.theme.colors.primary};
`;

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <Header />
        <Container />
        <Test type={TestType.Button}>hi</Test>
      </div>
    </ThemeProvider>
  );
}

export default App;
