import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <div className="content-wrap">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
