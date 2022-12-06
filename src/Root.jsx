import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";
import VoicePage from "./pages/VoicePage";
import SamplePage from "./pages/SamplePage";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/projects/sample" element={<SamplePage />} />
      <Route path="/projects/:projectId" element={<VoicePage />} />
    </Routes>
  );
};

export default Root;
