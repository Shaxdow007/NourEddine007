import React from "react";
import {
  Hero,
  NavBar,
  Skills,
  Projects,
  Footer,
  ContactMe,
  Client,
} from "./components";
import AboutMe from "./components/AboutMe";
import PreLoader from "./components/PreLoader";
function App() {
  return (
    <>
      <PreLoader />
      <div>
        <NavBar />
        <main>
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <ContactMe />
          <Client />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
