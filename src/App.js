import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Skillset from './components/Skillset';
import {Route, Routes, useLocation} from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search + location.hash,
      page_search: location.search,
      page_hash: location.hash,
    });

    console.log(location.pathname + location.search + location.hash);

  }, [location]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/skillset" element={<Skillset />} /> */}
        </Route>
      </Routes>
    </>

  );
}

export default App;
