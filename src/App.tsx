import { Route, Routes } from "react-router-dom";

import "./assets/scss/styles.scss";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import RegisterPage from "./pages/RegisterPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route element={<RequireAuth />}>
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
