import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route} from "react-router-dom";
import { useState } from "react";
import Maps from "./pages/Maps";
import News from "./components/News";
import Donate from "./pages/Donate";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";

function App() {
  const [name] = useState("Bize Ulaşın");
  const [age] = useState();

  return (
    <div className="App">
      <Header />
      <Toaster  position="top-right" reverseOrder={false}/>
      <Routes>
        <Route path="/" element={<Home name={name} age={age} />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact name={name} age={age} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;