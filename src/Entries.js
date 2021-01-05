import React from 'react'

export default function Entries(props) {
  return (
    <React.Fragment>
      <input id='inputName' type='text' className='input' value={props.name} placeholder="Add new item..." onChange={props.onChange}/>
      <input id='inputPrice' type='text' className='input' value={props.price} placeholder="Add price..." onChange={props.onChange}/>
      <button className='input btn reaction' type='submit' onClick={props.onSubmit}> Add Item</button>
    </React.Fragment>
  )
}
