import { Container } from "@mui/material";
import { useContext, useEffect, useState } from "react";
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
  const smBreakPoint = 600;
  const { isLoading } = useContext(LoadContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < smBreakPoint);
  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth < smBreakPoint)
    );
  }, [smBreakPoint]);

  const toggleMenu = () => {
    setMenuOpen((currMenuOpen) => {
      return !currMenuOpen;
    });
  };

  return (
    <BrowserRouter>
      <Header toggleMenu={toggleMenu} isMobile={isMobile} />
      <SiteNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isMobile={isMobile}
      />
      <Container sx={{ pt: { xs: 7, sm: 0 } }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:reviewId" element={<Review />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
      {isLoading ? <Loader /> : <></>}
    </BrowserRouter>
  );
}

export default App;
