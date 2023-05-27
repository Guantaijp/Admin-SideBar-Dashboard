import React from 'react';
import NavHeader from './components/NavHeader';
import PageContent from './components/PageContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavHeader />
      <div className="SideMenuAndPageContent">

        <Sidebar />
        <PageContent />
        </div>
        <Footer />

    </div>
  );
}

export default App;
