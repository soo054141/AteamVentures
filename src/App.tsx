import { myTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
