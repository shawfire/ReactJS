
import InfoCircle from 'react-icons/lib/fa/info-circle'
import Bomb from 'react-icons/lib/fa/bomb'

export const Alert = ({alert_type="info", str="Default alert message."}) => (
  <div className={`alert alert-${alert_type}`} role="alert">
    {(alert_type == "info") ? <InfoCircle/> : null}
    {(alert_type == "danger") ? <Bomb/> : null}
    {str}
  </div>
)
