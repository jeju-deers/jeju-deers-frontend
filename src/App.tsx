import MainPageLayout from "./pages/MainPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainPageLayout />
    </BrowserRouter>
  );
}

export default App;
