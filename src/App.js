import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";

import Start from "./components/Start";
import Features from "./components/Features";
import Demand from "./components/Demand";
import Advantages from "./components/Advantages";
import Tariffs from "./components/Tariffs";
import Applications from "./components/Applications";
import Faq from "./components/Faq";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Alab from "./components/Alab";

import "./App.scss";

function App() {
  return (
    <>
      <ThemeProvider breakpoints={["lg", "md", "sm", "xs"]} minBreakpoint="xs">
        
        <div>
          <Header />
        </div>
        <div>
          <Start />
        </div>
        <div>
          <Alab />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <Demand />
        </div>
        <div>
          <Advantages />
        </div>
        <div>
          <Tariffs />
        </div>
        <div>
          <Applications />
        </div>
        <div>
          <Faq />
        </div>
        <div>
          <Contacts />
        </div>
        <div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
