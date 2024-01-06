import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About} from "./pages/About";
import { Resume } from "./pages/Resume";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Home />
      
    </div>
  );
}

export default App;
