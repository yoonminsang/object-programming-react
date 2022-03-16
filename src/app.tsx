import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AliceInWonderlandPage from './pages/alice-in-wonderland-page';
import CoffePage from './pages/coffe-page';
import MainPage from './pages/main-page';
import NotFoundPage from './pages/not-found-page';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coffe" element={<CoffePage />} />
        <Route path="/AliceInWonderland" element={<AliceInWonderlandPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
