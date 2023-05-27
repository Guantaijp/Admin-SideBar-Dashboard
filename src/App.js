import React from 'react';
import Sidebar from './components/Sidebar';
import PageContent from './components/PageContent';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="fixed-sidebar">
        <Sidebar />
      </div>
      <div className="scrollable-content">
        <PageContent />
      </div>
    </div>
  );
}

export default App;
