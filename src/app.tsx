import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoffePage from './pages/coffe-page';
import MainPage from './pages/main-page';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coffe" element={<CoffePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
