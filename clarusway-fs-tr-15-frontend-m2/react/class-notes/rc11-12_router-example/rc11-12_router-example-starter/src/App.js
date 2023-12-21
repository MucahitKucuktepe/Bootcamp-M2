import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import Paths from "./pages/Paths";
import PersonDetail from "./pages/PersonDetail";
import Fullstack from "./pages/Fullstack";
import Aws from "./pages/Aws";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRouter from "./pages/PrivateRouter";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/people" element={<PrivateRouter />}>
          <Route index path="" element={<People />} />
          <Route path="/people/:id" element={<PersonDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/paths" element={<Paths />}>
          <Route path="fs" element={<Fullstack />}>
            <Route path="frontend" element={<Frontend />} />
            <Route path="Backend" element={<Backend />} />
          </Route>

          <Route index path="" element={<Aws />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
