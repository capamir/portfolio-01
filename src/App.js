import React from "react";
import {
  Banner,
  Header,
  Nav,
  About,
  Services,
  Work,
  Contact,
} from "./components";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Nav />
      <Header />
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default App;
