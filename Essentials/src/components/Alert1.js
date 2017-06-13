import { Component } from 'react'

export class Alert1 extends Component {
  render() {
    return (
      <div className={`alert alert-${this.props.alertType}`} role="alert">
        {this.props.children}
      </div>
    )
  }
}

Alert1.defaultProps = {
  alertType: "info"
}
