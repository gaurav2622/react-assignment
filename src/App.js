import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/headerComponent/header";
import ListingComponent from "./components/listingComponent/listing";
import DetailComponent from "./components/detailComponent/detail";
import Footer from "./components/footerComponent/footer";
import "../src/styles/global.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ListingComponent />} />
          <Route path="/details" element={<DetailComponent />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
