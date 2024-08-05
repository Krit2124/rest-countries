import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import { useEffect } from 'react';
import { useGeneralStore } from './store/store';

export default function App() {
  const navigate = useNavigate();
  const { fetchCountries } = useGeneralStore();

  useEffect(() => {
      // получение данных стран 
      fetchCountries();
      // переадресация на список стран
      navigate(`/all`);
  }, []);

  return (
    <>
      <header>
        <Header/>
      </header>

      <body className='theme-dark main-container'>
        <Outlet/>
      </body>
    </>
  );
}