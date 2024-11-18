import  Card  from "./component/Card";
import "./App.css";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App p-1 flex items-center flex-col gap-x-2 justify-center
    rounded-s h-screen w-screen
    bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))]  from-slate-800 via-green-900 to-green-800"
  >
      <Card />
      <Footer/>
    </div>
  );
}

export default App;
