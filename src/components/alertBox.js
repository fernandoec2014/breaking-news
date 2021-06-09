import React from 'react'
import Alert from '@material-ui/lab/Alert';

const AlertBox = ({ level, message }) => {
  return (
    <>
      <Alert severity={level}>{message}</Alert>
    </>
  )
}

export default AlertBox
