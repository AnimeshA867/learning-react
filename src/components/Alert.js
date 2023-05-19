import React from 'react'

function Alert(props) {
  

  return (
    props.alert &&<div>
    <div className={`alert alert-${props.alert.type} alert-dismissible fade ${props.alert.statuss}`} role="alert">
  <strong>{props.alert.type.charAt(0).toUpperCase()+props.alert.type.slice(1).toLowerCase()}</strong>: {props.alert.msg}
 
</div>
    </div>
  )
}

export default Alert
