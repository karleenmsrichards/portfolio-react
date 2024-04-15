import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="app">
      <Header
        setShowPopup={setShowPopup}
      />
      <div className="home-content">
        <Home
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
