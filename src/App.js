import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Ramen from './component/Ramen';
import NightView from './component/NightView';
import BigCity from './component/BigCity';
import HomePage from './component/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ramen" element={<Ramen />}/>
        <Route path="/night_view" element={<NightView />} />
        <Route path="/big_city"  element={<BigCity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
