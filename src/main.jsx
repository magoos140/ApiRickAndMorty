import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Character } from './Character';
import { FilterCharacter } from './FilterCharacter';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Character />} />
        <Route path="/filter-character" element={<FilterCharacter />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

