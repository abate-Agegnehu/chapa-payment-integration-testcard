import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Donate from "./pages/Donate";
import Aboute from "./pages/Aboute";
import Tnx from "./pages/Tnx";

function App() {
  return (
    <div>
      {/* Navbar Section */}
      <div className="bg-green-500 w-full fixed top-0 left-0 h-[3.5em] flex justify-center items-center z-10 shadow-lg">
        <Navbar />
      </div>

      {/* Main Content Section */}
      <div className="pt-[3.5em]">
        <Donate />
        <Aboute />
        <Tnx />
      </div>
    </div>
  );
}

export default App;
