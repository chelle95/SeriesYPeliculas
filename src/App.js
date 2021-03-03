import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Series from "./Pages/Series";
import Peliculas from "./Pages/Peliculas";

function App() {
  return (
    <div className="">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/series" component={Series} />
      <Route exact path="/movies" component={Peliculas} />
      <Footer />
    </div>
  );
}

export default App;
