import Aos from "aos";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";


import "aos/dist/aos.css";
import "./assets/css/General.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/responsive.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import HomeDemo1 from "./pages/HomeDemo1";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Archmage</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0="
          crossorigin="anonymous"
        />
      </Helmet>
      {/* <Router> */}
      <Routes>
        <Route path="/" exact element={<HomeDemo1 />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
};

export default App;
