import React from 'react'

const ErrorMsg =({names}) =>{
  return (
    <>
    {names.length === 0 && <h1>I am hungry</h1>}
    </>
  )
}


export default ErrorMsg;
