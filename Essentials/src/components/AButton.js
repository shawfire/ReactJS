import InfoCircle from 'react-icons/lib/fa/info-circle'
import Bomb from 'react-icons/lib/fa/bomb'

export const AButton = ({type="primary", str="Primary"}) => (
  <button type="button" className={`btn btn-${type}`}>
    {(type == "info") ? <InfoCircle/> : null}
    {(type == "danger") ? <Bomb/> : null}
    {str}
  </button>
)
