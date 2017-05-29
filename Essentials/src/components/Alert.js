export const Alert = ({alert_type, str}) => (
  <div className={`alert alert-${alert_type}`} role="alert">
    {str}
  </div>
)
