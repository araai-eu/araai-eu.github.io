import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import News from './pages/News';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/wydarzenia" element={<Events />} />
          <Route path="/aktualnosci" element={<News />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
