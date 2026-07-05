import { About } from "./components/About";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OpenSource } from "./components/OpenSource";
import { Research } from "./components/Research";
import { useLanguage } from "./useLanguage";
import { useReveal } from "./useReveal";

export default function App() {
  const { language, changeLanguage, isChanging, copy } = useLanguage();
  useReveal();

  return (
    <>
      <span className="top-anchor" id="top" aria-hidden="true" />
      <Header
        copy={copy}
        language={language}
        isLanguageChanging={isChanging}
        onLanguageChange={changeLanguage}
      />
      <main id="main">
        <Hero copy={copy} language={language} />
        <About copy={copy} />
        <Research copy={copy} />
        <OpenSource copy={copy} />
        <Awards copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </>
  );
}
