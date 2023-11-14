import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Start2 from "./components/Start2";

// import Alab from "./components/Alab";
// import Buttonsx from "./components/Buttons";

// import Features from "./components/Features";
// import Demand from "./components/Demand";
import Advantages from "./components/Advantages";
import Tariffs from "./components/Tariffs";
// import Applications from "./components/Applications";
// import Feedback from "./components/Feedback";
// import FeedbackCard from "./components/FeedbackCard";
import Faq from "./components/Faq";
import Contacts from "./components/Contacts";
// import Footer from "./components/Footer";
// import Upword from "./components/Upword";


import "./App.scss";

function App() {
  return (
    <>
      <ThemeProvider breakpoints={["lg", "md", "sm", "xs"]} minBreakpoint="xs">
      {/* <div>
        <Buttonsx />
      </div> */}
        <div>
          <Start2 />
        </div>
        {/* <div>
          <Alab />
        </div> */}
        {/* <div>
          <Features />
        </div> */}
        
        {/* <div>
          <Demand />
        </div> */}
        <div>
          <Advantages />
        </div>
        <div>
          <Tariffs />
        </div>
        {/* <div> 
          <Applications />
        </div>
        <div>
          <Feedback />
        </div> */}
        {/* <div>
          <FeedbackCard />
        </div> */}
        <div>
          <Faq />
        </div>
        <div>
          <Contacts />
        </div>
        {/* <div>
          <Footer />
        </div> */}
      </ThemeProvider>
    </>
  );
}

export default App;
