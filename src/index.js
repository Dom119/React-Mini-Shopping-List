//first one
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ShowTotal from './ShowTotal.js'
import Entries from './Entries.js'
import Items from './Items.js'
import './index.css'

function App() {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([])
  const [inputPrice, setInputPrice] = useState("")
  const [inputName, setInputName] = useState("")

  const handleChange = function (event) {
    if (event.target.id === 'inputName') {
      setInputName(event.target.value)
    } else {
      setInputPrice(event.target.value)
    }
  }

  const handleSubmit = function (event) {
    const numbers = /^[0-9]+$/
    if (inputPrice === "") {
      alert('please input the price');
    } else
      if (!inputPrice.match(numbers)) {
        alert('Please enter number for price!')
      } else
      if (inputName === "") {
        alert('please input the name');
      }
      else {
      const newItem = [{ name: inputName, price: inputPrice, quantity: 1 }]
      const newData = data.concat(newItem);
      newData.sort(function(a, b){
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
      setData(newData);
      let newTotal = newItem[0].price * newItem[0].quantity;
      data.forEach(item => {
        newTotal += item.price * item.quantity;
      })
      setTotal(newTotal)
      setInputPrice('');
      setInputName('');
    }
    
  }

  const handleClickMore = function (ref) {
    ref.quantity += 1;
    const newData = (data.filter(item =>
        item.name !== ref.name
      )).concat([ref]);
      newData.sort(function(a, b){
          var x = a.name.toLowerCase();
          var y = b.name.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
    setData(newData);
    
    let newTotal = ref.price * ref.quantity;
    data.forEach(item => {
      if (ref.name !== item.name) {
        newTotal += item.price * item.quantity;
      }
    })
    setTotal(newTotal)
  }

  const handleClickLess = function (ref) {
    if (ref.quantity > 0) {
      ref.quantity -= 1;
      const newData = (data.filter(item =>
        item.name !== ref.name
      )).concat([ref]);
      newData.sort(function(a, b){
          var x = a.name.toLowerCase();
          var y = b.name.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
      setData(newData);

    let newTotal = ref.price * ref.quantity;
    data.forEach(item => {
      if (ref.name !== item.name) {
        newTotal += item.price * item.quantity;
      }
    })
    setTotal(newTotal)
    }
  }

  const handleDelete = (nameRef) => {
    const newData = data.filter(item => item.name !== nameRef)
    setData(newData);

    let newTotal = 0;
    newData.forEach(item => {
        newTotal += item.price * item.quantity;
    })
    setTotal(newTotal)
  }

  return (
    <div className='shopping'>
      <Entries price={inputPrice} name={inputName} onChange={handleChange} onSubmit={handleSubmit}/>
      <Items data={data} clickMore={handleClickMore} clickLess={handleClickLess} delete={handleDelete}/>
      <ShowTotal total={total} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))