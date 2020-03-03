import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserForm from './Pages/UserForm';
import HomePage from './Pages/HomePage';
import YourPage from './Pages/YourPage'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/form" component={UserForm} />
        <Route exact path="/users/:username" component={YourPage} />
      </div>
    </Router>
  );
}

export default App;
