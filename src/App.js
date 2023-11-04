import React from "react";
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import Start from "./components/Start";
import Features from "./components/Features";
import Demand from "./components/Demand";
import Advantages from "./components/Advantages";
import Tariffs from "./components/Tariffs";
import ApplyForm from "./components/ApplyForm";
import Faq from "./components/Faq";
import Contacts from "./components/Contacts";

import './App.scss';

function App() {
  return (
    <ThemeProvider
      breakpoints={['lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs"
    >
      <div>
        <Start />
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
        <ApplyForm />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Contacts />
      </div>
    </ThemeProvider >
  );
}

export default App;
