/*
    ./components/App.js
*/
import React from 'react';
import { hello, goodbye } from './Greatings.js';
import { Alert } from './Alert.js';
import { Alert1 } from './Alert1.js';
import { AClock } from './AClock.js';
import { AButton } from './AButton.js';

window.React = React

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello There!</h1>
        <AClock />
        <AButton /><AButton type="warning" str="Warning" />
        <AButton type="info" str="Info" />
        <AButton type="danger" str="Danger" />
        {hello}
        {goodbye}
        <Alert alert_type="success" str="Alert from stateless functional component."/>
        <Alert alert_type="info" str="Success alert message."/>
        <Alert alert_type="warning" str="Success alert message."/>
        <Alert alert_type="danger" str="Success alert message."/>
        <Alert1 />
        <Alert1 str="Alert from ES6 react class component."/>
      </div>);
  }
}
