/*
    ./components/App.js
*/
import React from 'react';
import { hello, goodbye } from './Greatings.js';

export default class App extends React.Component {
  render() {
    return (
     <div>
        <h1>Hello There!</h1>
        {hello}
        {goodbye}
      </div>);
  }
}
