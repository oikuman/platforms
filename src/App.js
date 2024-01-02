import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";

// import MyNavBar from "./components/MyNavBar";
import Start2 from "./components/Start2";
import Features from "./components/Features";
import Demand from "./components/Demand";
import Advantages from "./components/Advantages";
import Why from "./components/Why";
import Tariffs from "./components/Tariffs";
import Applications from "./components/Applications";
import Partners from "./components/Partners";
import Feedback from "./components/Feedback";
import Faq from "./components/Faq";
// import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

// import Alab from "./components/Alab";
import Buttonsx from "./components/Buttons";
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
        <div style={{ textAlign: 'center', fontSize: 26, color: 'red' }}>
          <p>Сайт в режимі розробки</p>
        </div>
        <main>

          <Features />
          <Demand />
          <Advantages />
          <Tariffs />
          <Applications />
          <Why />
          <Partners />
          <Feedback />
          <Faq />
          {/* <Contacts /> */}
        </main>
        <Footer />
        {/* <Alist />
          <Alab />
          */}
        <Buttonsx />

        {/*
          <Box /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
