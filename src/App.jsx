import React from "react";
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Beginning from '../src/components/pages/story/Beginning';
import Bonfire from '../src/components/pages/island/Bonfire';
import Cave from '../src/components/pages/island/Cave';
import Center from '../src/components/pages/island/Center';
import East from '../src/components/pages/island/East';
import End from "./components/pages/story/End";
import North from '../src/components/pages/island/North';
import Northeast from '../src/components/pages/island/Northeast';
import Northwest from '../src/components/pages/island/Northwest';
import PartPlot from "../src/components/pages/story/PartPlot";
import Rock from '../src/components/pages/island/Rock';
import Sea from "../src/components/pages/island/Sea";
import South from '../src/components/pages/island/South';
import Southeast from '../src/components/pages/island/Southeast';
import Southwest from '../src/components/pages/island/Southwest';
import West from '../src/components/pages/island/West';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Beginning />} />
        <Route path="/bonfire" element={<Bonfire />} />
        <Route path="/cave" element={<Cave />} />
        <Route path="/center" element={<Center />} />
        <Route path="/east" element={<East />} />
        <Route path="/end" element={<End />} />
        <Route path="/north" element={<North />} />
        <Route path="/northeast" element={<Northeast />} />
        <Route path="/northwest" element={<Northwest />} />
        <Route path="/partplot" element={<PartPlot />} />
        <Route path="/rock" element={<Rock />} />
        <Route path="/sea" element={<Sea />} />
        <Route path="/south" element={<South />} />
        <Route path="/southeast" element={<Southeast />} />
        <Route path="/southwest" element={<Southwest />} />
        <Route path="/west" element={<West />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;