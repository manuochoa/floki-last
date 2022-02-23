import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Features from "./components/Features";
import Tokenomics from "./components/Tokenomics";
import Minting from "./components/Product/Product";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { useRef } from "react";
import "./fonts/stylesheet.css";
import "./scss/style.scss";
import addToRefs from "./components/services/addToRefs";

export default function App() {
  const sections = useRef([]);

  return (
    <>
      <Header sections={sections} />
      <main className="main">
        <section className="section section--orange">
          <Banner refProp={(el) => addToRefs(el, sections)} />
          <div className="container">
            <About refProp={(el) => addToRefs(el, sections)} />
          </div>
          <Roadmap refProp={(el) => addToRefs(el, sections)} />
        </section>
        <Features refProp={(el) => addToRefs(el, sections)} />
        <Tokenomics refProp={(el) => addToRefs(el, sections)} />
        <Minting refProp={(el) => addToRefs(el, sections)} />
        <FAQ refProp={(el) => addToRefs(el, sections)} />
      </main>
      <Footer sections={sections} />
    </>
  );
}
