import "./App.css";
import { Wrapper } from "./components/Wrapper";
import { Header } from "./components/Header";
import { Cards } from "./components/Cards/";
import { Card } from "./components/Card";
import { Slider } from "./components/Slider";
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Slider />
        
        <Cards />
      </Wrapper>
    </div>
  );
}

export default App;
