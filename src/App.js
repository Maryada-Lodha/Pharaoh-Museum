import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import aboutImg from './assets/images/about-bg-img.png';
import AboutPage from './components/AboutPage';
import EventPage from './components/EventsPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route exact path='/' element={<Header bgImg={aboutImg} headerText="Home Page" />}></Route>
          <Route exact path='/about' element={<AboutPage />}></Route>
          <Route exact path='/gallery' element={<GalleryPage />}></Route>
          <Route exact path='/event' element={<EventPage />}></Route>
          <Route exact path='/contact' element={<ContactPage />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
