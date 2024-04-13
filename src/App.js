import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="home-content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
