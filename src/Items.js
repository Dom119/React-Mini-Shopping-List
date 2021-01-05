import React from 'react'
import Item from './Item.js'

export default function items(props) {
  return (
    <React.Fragment>
      <ul class='items'>
        {props.data.map(item => {
          return (
            <Item key={item.name}
              item={item}
              clickMore={() => props.clickMore({ name: item.name, price: item.price, quantity: item.quantity })}
              clickLess={() => props.clickLess({ name: item.name, price: item.price, quantity: item.quantity })}
              delete={()=>props.delete(item.name)} />
          )
        })}
      </ul>
    </React.Fragment>
  )
}
