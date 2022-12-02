// src/App.js
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import countriesJSON from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesJSON);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/:id" element={<CountryDetails countries={countries} />} />
        <Route path="/login" element="Hello world" />
      </Routes>
    </div>
  );
}
export default App;
