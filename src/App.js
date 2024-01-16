import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";

// import MyNavBar from "./components/MyNavBar";
import Start2 from "./components/Start2";
import Features from "./components/Features";
import Demand from "./components/Demand";
import Why from "./components/Why";
import Tariffs from "./components/Tariffs";
import Applications from "./components/Applications";
import Partners from "./components/Partners";
import Feedback from "./components/Feedback";
import Faq from "./components/Faq";

import Footer from "./components/Footer";
// import Advantages from "./components/Advantages";
// import Contacts from "./components/Contacts";
// import Cont from "./components/Cont";
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

        {/* <MyNavBar /> */}
        <Start2 />
        <main>
          <Features />
          <Demand />
          <Why />
          <Tariffs />
          <Applications />
          <Partners />
          <Feedback />
          <Faq />
          
        </main>
        <Footer />
        {/* <Cont /> */}
        {/* <Advantages /> */}
        {/* <Contacts /> */}
        {/* <Alist />
          <Alab />
          */}
        {/* <Buttonsx /> */}
        {/*
          <Box /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
