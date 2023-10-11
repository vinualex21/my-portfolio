import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import Projects from './components/Projects';
import Experience from './components/Experience';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
