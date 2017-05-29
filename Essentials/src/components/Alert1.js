import { Component } from 'react'

export class Alert1 extends Component {
  render() {
    return (
      <div className={`alert alert-${this.props.alert_type}`} role="alert">
        {this.props.str}
      </div>
    )
  }
}

Alert1.defaultProps = {
  alert_type: "info",
  str: "Default alert message."
}
