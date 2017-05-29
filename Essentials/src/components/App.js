/*
    ./components/App.js
*/
import React from 'react';
import { hello, goodbye } from './Greatings.js';
import { Alert } from './Alert.js';
import { Alert0 } from './Alert0.js';
import { Alert1 } from './Alert1.js';

window.React = React

export default class App extends React.Component {
  render() {
    return (
     <div>
        <h1>Hello There!</h1>
        {hello}
        {goodbye}
        <Alert alert_type="success" str="Alert from stateless functional component."/>
        <Alert alert_type="info" str="Success alert message."/>
        <Alert alert_type="warning" str="Success alert message."/>
        <Alert alert_type="danger" str="Success alert message."/>
        <Alert0 />
        <Alert0 str="Alert from createClass react component."/>
        <Alert1 />
        <Alert1 str="Alert from ES6 react class component."/>
      </div>);
  }
}
