import { Global } from "@emotion/react";
import theme from "./theme/styledTheme";
import global from "./theme/global";
import { ThemeProvider } from "@emotion/react";
import HomePage from "./components/template/HomePage/HomePage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
