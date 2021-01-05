import React from 'react'

export default function ShowTotal(props) {
  return (
    <React.Fragment>
        <button className="total btn">Total: ${props.total}</button>
    </React.Fragment>
  )
}
