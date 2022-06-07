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
          <Switch>
            <Route path="/movies/actors">
              <ActorIndexPage />
            </Route>
            <Route path="/movies">
              <MovieIndexPage />
            </Route>
            <Redirect to="/movies" />
          </Switch>
        </>
        :
        <LoginPage />
      }
    </main>
  );
}