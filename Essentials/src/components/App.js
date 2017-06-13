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
        <AButton /><AButton type="warning" title="Warning" />
        <AButton type="info" title="Info" />
        <AButton type="danger" title="Danger" />
        {hello}
        {goodbye}
        <Alert alertType="success">
          Alert from stateless functional component.
        </Alert>
        <Alert alertType="info">
          Success alert message.
        </Alert>
        <Alert alertType="warning" title="Success alert message."/>
        <Alert alertType="danger" title="Success alert message."/>
        <Alert1 />
        <Alert1 title="Alert from ES6 react class component."/>
      </div>);
  }
}
