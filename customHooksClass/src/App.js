
import { useState } from 'react';
import './App.css';
import Pin from './Components/Pin';
import useFetch from './CustiomHooks/useFetch';

function App() {

  
  
   const url = "https://reqres.in/api/users"
   const {loading, data, error} = useFetch(url) 

  //console.log(myData)

  const [ otp, setOtp ] = useState()
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
              <img src={elem.avatar} alt="profile"/>
               <h4>{elem.first_name}</h4>
            </div>
          ))
        }

        
      </div>  

        <Pin length={5} setOtp={setOtp}/>
        <div>
          The OTP input is{otp}
        </div>
       
    </div>
  );
}

export default App;
