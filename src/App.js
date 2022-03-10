import './App.css';
const  Person = (props) => {
  return (
    <>
     <h1> Name : </h1>
     <h2> Last Name: Doe</h2>
     <h2> Age : 30</h2>
    </>
  )
}
function App() {

  return (
    <div className="App">
      <Person />
    </div>
  );
}

export default App;
