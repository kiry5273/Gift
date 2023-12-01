import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Ramen from './pages/Ramen';
import NightView from './pages/NightView';
import BigCity from './pages/BigCity';
import HomePage from './pages/HomePage';
import Calendar from './pages/Calendar';
import Letter from './pages/Letter';
import Calendar2 from './pages/Calendar2';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ramen" element={<Ramen />}/>
        <Route path="/night_view" element={<NightView />} />
        <Route path="/big_city"  element={<BigCity />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calendar2" element={<Calendar2 />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
