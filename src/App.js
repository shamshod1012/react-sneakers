import "./App.css";
import { Wrapper } from "./components/Wrapper";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Slider } from "./components/Slider";
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Slider />
      </Wrapper>
    </div>
  );
}

export default App;
