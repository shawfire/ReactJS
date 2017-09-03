import { Component } from 'react'
import InfoCircle from 'react-icons/lib/fa/info-circle'
import Bomb from 'react-icons/lib/fa/bomb'

export class Alert1 extends Component {
  render() {
    return (
      <div className={`alert alert-${this.props.alertType}`} role="alert">
        {/*{(alertType == "info") ? <InfoCircle/> : ""}
        {(alertType == "danger") ? <Bomb/> : ""}*/}
        {this.props.children}
      </div>
    )
  }
}

Alert1.defaultProps = {
  alertType: "info"
}
