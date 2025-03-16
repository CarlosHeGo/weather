import { WeatherProvider } from './context/WeatherContext';
import { BrowserRouter, Route, Routes } from 'react-router';
import CiudadesListado from './components/CiudadesListado';
import NavBarWeather from './components/NavBarWeather';
import CiudadesDetalle from './components/CiudadesDetalle';

function App() {

  return (
    <WeatherProvider>
      <BrowserRouter>
        <NavBarWeather />
        <Routes>
          <Route path='/' element={<CiudadesListado />} />
          <Route path='/ciudad/:nombre' element={<CiudadesDetalle />} />
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  );
}

export default App;
