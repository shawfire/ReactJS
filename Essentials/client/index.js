import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

const { render } = ReactDOM

render(
  <div>
    <App />
  	<h1 id='title'
  		className='header'
  		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
  	Hello World!
  	</h1>
  </div>,
	document.getElementById('react-container')
)
