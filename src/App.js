import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainGrid from './containers/MainGrid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  let theme = useSelector(state => state.theme);
  return (
    <div className={`App ${theme === 'dark' && 'bp3-dark'}`}>
      <Router>
        <MainGrid>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </Switch>
        </MainGrid>
      </Router>
    </div>
  );
}

export default App;
