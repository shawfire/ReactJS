/*
    ./client/components/App.jsx
*/
import React from 'react';
import { hello, goodbye } from './Greatings.js';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center', backgroundColor: 'orange',
          color: 'white', fontFamily: 'verdana'}}>
        <h1>Hello World!</h1>
        {hello}
        {goodbye}
      </div>);
  }
}
