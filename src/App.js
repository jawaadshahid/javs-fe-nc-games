import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";
import SiteNav from "./components/SiteNav";
import { LoadContext } from "./contexts/Load";
import Home from "./routes/Home";
import PageNotFound from "./routes/PageNotFound";
import Review from "./routes/Review";
import Reviews from "./routes/Reviews";

function App() {
  const { isLoading } = useContext(LoadContext);

  return (
    <BrowserRouter>
      <Header />
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:reviewId" element={<Review />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {isLoading ? <Loader /> : <></>}
    </BrowserRouter>
  );
}

export default App;
