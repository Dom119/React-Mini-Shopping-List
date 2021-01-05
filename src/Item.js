import React from 'react'

export default function Item(props) {
  return (
    <React.Fragment>
      <li className='item'>
          <div class='info-front'>
            <button className='ticked' onClick={props.delete}><i className='fa fa-close'></i></button>
          <div className='item-name'>{props.item.name}</div>
          </div>
        <div className='info-middle'>${props.item.price}</div>
          <div className="info-back">
          <button className='less' onClick={props.clickLess}><i className='fa fa-2x fa-angle-left	
'></i></button>
          <div class='quantity'>{props.item.quantity}</div>
          <button className='more' onClick={props.clickMore}><i className='fa fa-2x fa-angle-right	
'></i></button>
          </div>
        </li>
    </React.Fragment>
  )
}
