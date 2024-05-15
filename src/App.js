import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UniversityProvider } from "./context/UniversityContext";
import Header from "./components/headerComponent/header";
import ListingComponent from "./components/listingComponent/listing";
import DetailComponent from "./components/detailComponent/detail";
import Footer from "./components/footerComponent/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <UniversityProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ListingComponent />} />
            <Route path="/details" element={<DetailComponent />} />
          </Routes>
        </Router>
      </UniversityProvider>
      <Footer />
    </div>
  );
}

export default App;
