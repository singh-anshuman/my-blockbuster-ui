import React from 'react';
import './App.css';
import BBHeader from './components/bbHeader/bbHeader';
import BBNavigation from './components/bbNavigation/bbNavigation';
import BBBody from './components/bbBody/bbBody';

function App() {
    return (
	    <div className="container">
            <BBHeader/>
            <BBNavigation/>
            <BBBody/>
	    </div>
  );
}

export default App;
