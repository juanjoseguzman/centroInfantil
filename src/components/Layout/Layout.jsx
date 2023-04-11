import { Outlet } from "react-router-dom";
import "../../../src/index.css";
import { BotonesHome } from "../BotonesHome/BotonesHome";
import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Logo />
      <BotonesHome />
      <Outlet />
      <Footer/>
    </>
  );
}
