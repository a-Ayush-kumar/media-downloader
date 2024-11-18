import Card from "./component/Card";
import "./App.css";
import Footer from "./component/Footer";
import Ytube from "./component/Ytube";

function App() {
  return (
    <div
      className="App main-box p-1 flex items-center flex-col gap-x-2 justify-center
    rounded-s h-screen w-screen" id="grid"
    >
      <Card />
      <Ytube />
      <Footer />
    </div>
  );
}

export default App;
