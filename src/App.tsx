import { myTheme } from "./styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { Container } from "./components/Container/style";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Filtering from "./components/Filtering/Filtering";

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
      <Header />
      <Container>
        <Title />
        <Filtering />
        <Test type={TestType.Button}>hi</Test>
      </Container>
    </ThemeProvider>
  );
}

export default App;
