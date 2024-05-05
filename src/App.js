import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';

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

  const Skills = lazy(() => import('./components/Skills'));

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Suspense>
    </>

  );
}

export default App;
