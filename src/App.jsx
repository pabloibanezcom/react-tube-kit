import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <Router>
      <div className="site-container">{routes()}</div>
    </Router>
  );
}

export default App;
