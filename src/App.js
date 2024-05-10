import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css";
import Header from "./components/headerComponent/header";
import ListingComponent from "./components/listingComponent/listing";
import DetailComponent from "./components/detailComponent/detail";
import Footer from "./components/footerComponent/footer";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
