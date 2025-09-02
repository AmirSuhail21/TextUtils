import React from 'react'

function Alert(props) {
  return (
        props.alert && <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
  )
}

export default Alert
