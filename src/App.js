import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/ContactUs/Contact";
import Home from "./Pages/HomePage/Home";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/singleBlog" element={<SingleBlog />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
