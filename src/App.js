import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/main/Home';
import Movies from './pages/main/Movies';
import TvShows from './pages/main/Tvshows';
import Pricing from  './pages/main/Pricing';
import About from './pages/main/About';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/movies' element={ <Movies /> } />
          <Route path='/tvshows' element={ <TvShows /> } />
          <Route path='/pricing' element={ <Pricing /> } />
          <Route path='/about' element={ <About /> } />
          {/* <Route path='*' element={ <HomePage /> } /> */}
      </Routes>
    </div>
  );
}

export default App;
