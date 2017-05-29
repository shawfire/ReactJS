import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App.js';

const { render } = ReactDOM

render(
    <div>
      <div className="alert alert-success" role="alert">
        <strong>Well done!</strong> You successfully read this important alert message.
      </div>
      <App />
    </div>,
    document.getElementById('react-container')
)
