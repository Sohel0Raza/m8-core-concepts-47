import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const products =[
  //   {name:'Laptop', price:'47000'},
  //   {name:'Phone', price:'74000'},
  //   {name:'Watch', price:'3400'},
  //   {name:'Monitor', price:'55400'},
  //   {name:'Tablat', price:'13400'},
  // ]
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      {/* <Counter></Counter> */}
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}
     {/* <Product name='Laptop' price='47000'></Product>
     <Product name='Phone' price='75000'></Product>
     <Product name='Watch' price='3000'></Product> */}
    </div>
  );
}
function Product(props){
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0)
  const increaseCount = () =>{setCount(count + 1)}
  const decrease = () =>{setCount(count - 1)}
  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount)
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

function ExternalUsers (){
  const [users, setUsers] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  }, [])
  return(
    <div>
      <h3>External Users</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User (props){
  return(
    <div style={{border: '2px solid red', margin: '20px'}}>
      <h4>Name: {props.name}</h4>
      <p>Email: {props.email}</p>
    </div>
  )
}
export default App;
