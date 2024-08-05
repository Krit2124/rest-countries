import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import { useEffect } from 'react';
import { useGeneralStore } from './store/store';

export default function App() {
  const navigate = useNavigate();
  const { fetchCountries, clearError } = useGeneralStore();

  useEffect(() => {
      // получение данных стран 
      fetchCountries();
      navigate(`/all`);
      return () => clearError();
  }, []);

  return (
    <>
      <header>
        <Header/>
      </header>

      <body className='theme-dark'>
        <Outlet/>
      </body>
    </>
  );
}