import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import MovieIndexPage from '../MovieIndexPage/MovieIndexPage';
import ActorIndexPage from '../ActorIndexPage/ActorIndexPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);
  
  return (
    <main className="App">
      { user ? 
        <>
          <MovieIndexPage />
          :
          <LoginPage />
        </>
      }
    </main>
  );
}