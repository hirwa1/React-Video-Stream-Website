import './App.css';
const  Person = (props) => {
  return (
    <>
     <h1> Name : {props.name}</h1>
     <h2> Last Name: {props.last}</h2>
     <h2> Age : {props.age}</h2>
    </>
  )
}
function App() {

  return (
    <div className="App">
      <Person name={'Hirwa'} last={'NIYIBZI'} age={'21'}/>
      <Person name={'John'} last={'Money'} age={'34'}/>
      <Person name={'Lord'} last={'Hirwao'} age={'21'}/>
    </div>
  );
}

export default App;
