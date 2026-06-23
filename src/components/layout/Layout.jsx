import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  const knownRoutes = [
    "/",
    "/about",
    "/services",
    "/projects",
    "/news",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  const isNotFound = !knownRoutes.includes(pathname);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {!isNotFound && <Footer />}
    </>
  );
}