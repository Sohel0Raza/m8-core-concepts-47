import logo from './logo.svg';
import './App.css';

const number = 1239;
const singers =[
  {name: 'Mahafuj', job: 'singer'},
  {name: 'Imran', job: 'singer'},
  {name: 'Abul', job: 'singer'},
  {name: 'Dabul', job: 'singer'},
  {name: 'Ebul', job: 'singer'},
]

const singerStyle = {
  color: 'white',
  backgroundColor: 'blue'
}
function App() {
  const nayoks = ['Ruble', 'BappaRaz', 'Kuber', 'Sakib Khan', 'Jashim']
  return (
    <div className="App">
      <h5>New Component</h5>
      {/* {
        nayoks.map(nayok => <li>{nayok} </li>)
      } */}
      {/* {
      nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name} job={singer.job}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={[nayoks[1]]} nayika="cheka"></Person>
      <Person name={[nayoks[2]]} nayika="Peka"></Person> */}
      <h5>My friend</h5>
      <Friend name="Anower Khan" job="Samit"></Friend>
      <Friend name="Shihab" job="Student"></Friend>
      <Friend name="Utshab" job="BSC"></Friend>
      <Friend name="Shawon Khan" job="IP Net"></Friend>
      <Friend name="MD Ali" job="DUTE"></Friend>
    </div>
  );
}
function Person(props){
  console.log(props)
  return (
    <div className='person'>
      <h3>{props.name}</h3>
      <p>Job:{props.job}</p>
    </div>
  )
}
function Friend(props){
  return (
    <div className='friend'>
      <h3>Name: {props.name}</h3>
      <p>Job: {props.job} </p>
    </div>
  )
}
export default App;
