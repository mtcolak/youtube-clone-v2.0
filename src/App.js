import Body from "./components/Body";
import Left from "./components/Left";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      { /* Navbar */}
      <Navbar />
      <div className="flex bg-[#0f0f0f]">
        { /* Left */}
        <Left />
        <Body />
      </div>
    </>
  );
}

export default App;
