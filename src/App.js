import React, { useEffect } from 'react';
import Welcom from './components/welcomSection/Welcom';
import Batches from './components/Batches/Batches';
import SectionThird from './components/sectionThird/SectionThird';
import MentorShip from './components/MentorShip/MentorShip';

function App() {
  useEffect(() => {
    // Dynamically add the preconnect and font link to the head of the document
    const preconnectGoogle = document.createElement('link');
    preconnectGoogle.rel = 'preconnect';
    preconnectGoogle.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnectGoogle);

    const preconnectGstatic = document.createElement('link');
    preconnectGstatic.rel = 'preconnect';
    preconnectGstatic.href = 'https://fonts.gstatic.com';
    preconnectGstatic.crossOrigin = 'anonymous';
    document.head.appendChild(preconnectGstatic);

    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Itim&display=swap';
    document.head.appendChild(fontLink);

    // Cleanup the links when the component unmounts
    return () => {
      document.head.removeChild(preconnectGoogle);
      document.head.removeChild(preconnectGstatic);
      document.head.removeChild(fontLink);
    };
  }, []);  // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <Welcom />
      <Batches />
      <SectionThird />
      <MentorShip />
    </div>
  );
}

export default App;
