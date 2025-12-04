import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { CoursePage } from './pages/CoursePage';
import { RoadmapPage } from './pages/RoadmapPage';
import { SuccessStories } from './pages/SuccessStories';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/stories" element={<SuccessStories />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;