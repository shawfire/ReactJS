
import InfoCircle from 'react-icons/lib/fa/info-circle'
import Bomb from 'react-icons/lib/fa/bomb'

export const Alert = ({alertType="info", children}) => (
  <div className={`alert alert-${alertType}`} role="alert">
    {(alertType == "info") ? <InfoCircle/> : null}
    {(alertType == "danger") ? <Bomb/> : null}
    {children}
  </div>
)
