import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Materieles from "./components/materieles";
import Droits from "./components/droits";
import Services from "./components/services";

import Education from "./components/Education";
import Sport from "./components/Sport";
import Travail from "./components/Travail";
import Natation from "./components/Natation";
import Mobilite  from "./components/Mobilite";





function routes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Materieles" element={<Materieles />} />
      <Route path="/Droits" element={<Droits />} />
      <Route path="/Services" element={<Services />} />



      <Route path="/Education" element={<Education />} />
      <Route path="/Sport" element={<Sport />} />
      <Route path="/Travail" element={<Travail />} />

      <Route path="/Natation" element={<Natation />} />
      <Route path="/Mobilite" element={<Mobilite />} />

    </Routes>
  );
}

export default routes;