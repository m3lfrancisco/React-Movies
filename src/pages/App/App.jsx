import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { movies } from '../../data.js';
import LoginPage from '../LoginPage/LoginPage';
import MovieIndexPage from '../MovieIndexPage/MovieIndexPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorIndexPage from '../ActorIndexPage/ActorIndexPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);
  
  return (
    <main className="App">
      { user ? 
        <>
          <h1>Welcome {user}!</h1>
          <NavBar />
          <Switch>
            <Route path="/movies/:movieName">
              <MovieDetailPage movies={movies} />
            </Route>
            <Route path="/movies">
              <MovieIndexPage movies={movies} />
            </Route>
            <Route path="/actors">
              <ActorIndexPage movies={movies} />
            </Route>
            <Redirect to="/movies" />
          </Switch>
        </>
        :
        <LoginPage setUser={setUser} />
      }
    </main>
  );
}