import HoverFocus from "./components/HoverFocus";
import Navbar from "./components/Navbar";
import SpacingAndSizing from "./components/SpacingAndSizing";
import Typograpfy from "./components/Typograpfy";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
    <Navbar />
      <h1 className="text-2xl text-center text-purple-700">Hello Tailwind</h1>
      {/* <Typograpfy /> */}
      {/* <SpacingAndSizing /> */}
      {/* <HoverFocus /> */}
      <Profile />
    </div>
  );
}

export default App;
