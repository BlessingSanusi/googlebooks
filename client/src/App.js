import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import Search from './pages/Search'
import Saved from './pages/Saved'
import NoMatch from './pages/NoMatch'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
       <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/saved/:id" component={Saved} />
          <Route component={NoMatch} /> 
          </Switch>
          <Footer />
      </div>
      
    </Router>

  );
}

export default App;
