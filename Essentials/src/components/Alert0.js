
import { createClass } from 'react'

export const Alert0 = createClass({
  getDefaultProps() {
    return {
      alert_type: "info",
      str:  "default alert message."
    }
  },
  render() {
    return (
      <div className={`alert alert-${this.props.alert_type}`} role="alert">
        {this.props.str}
      </div>
    )
  }
})
