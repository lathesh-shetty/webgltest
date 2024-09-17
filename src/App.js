import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Game from './components/Game';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/" component={Game} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;