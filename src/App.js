import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";

import Start2 from "./components/Start2";
import Features from "./components/Features";
import Demand from "./components/Demand";
import Advantages from "./components/Advantages";
import Tariffs from "./components/Tariffs";
import Applications from "./components/Applications";
import Feedback from "./components/Feedback";
import Faq from "./components/Faq";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

// import Alab from "./components/Alab";
// import Buttonsx from "./components/Buttons";
// import Alist from "./components/Alist";
// import Box from "./components/Box";
// import FeedbackCard from "./components/FeedbackCard";
// import Upword from "./components/Upword";

import "./App.scss";

function App() {
  return (
    <>
      <ThemeProvider breakpoints={["lg", "md", "sm", "xs"]} minBreakpoint="xs">
        <Start2 />
        <main>
          <Features />
          <Demand />
          <Advantages />
          <Tariffs />
          <Applications />
          <Feedback />
          <Faq />
          <Contacts />
        </main>
        <Footer />
          {/* <Alist />
          <Buttonsx />
          <Alab />
          <Box /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
