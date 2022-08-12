
import './App.css';
import useFetch from './CustiomHooks/useFetch';

function App() {

  
  
  const url = "https://reqres.in/api/users"
  const {loading, data, error} = useFetch(url) 

  //console.log(myData)
  return (
    <div className="App">
       <h1>Custom Hooks</h1>
         <br/>
         <br/>
      <div style={{width:"60%", margin: "auto", display:"grid", gridTemplateColumns:"repeat(3, 1fr)"}}>
        { loading && <div>Loading....</div>}
        { error && <div>Error....</div>}
        {
          data.map((elem)=>(
            <div >
              <img src={elem.avatar}/>
               <h4>{elem.first_name}</h4>
            </div>
          ))
        }
        
      </div>   
    </div>
  );
}

export default App;
